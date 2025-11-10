const path = require('node:path')
const fs = require('node:fs/promises')
const { existsSync } = require('node:fs')
const crypto = require('node:crypto')
const sharp = require('sharp')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') })

const ASSETS_DIRS = [
  path.resolve(process.cwd(), 'public', 'assets'),
  path.resolve(process.cwd(), 'assets'),
  path.resolve(process.cwd(), 'Assets'),
]

const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.avif'])

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY
const SUPABASE_BUCKET = process.env.SUPABASE_BUCKET || 'genrec_cms'
const SUPABASE_GALLERY_PATH = (process.env.SUPABASE_GALLERY_PATH || 'gallery').replace(/\\/g, '/').replace(/^\/+|\/+$/g, '')
const BACKLINK_ENDPOINT = process.env.BACKLINK_ENDPOINT || 'https://genrecai.com/api/backlink'
const USED_IN_SITES = parseListEnv(process.env.GALLERY_USED_IN_SITES) || ['https://genrecai.com']
const INDEX_PATH = path.resolve(process.cwd(), 'gallery-index.json')

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing Supabase credentials. Please set SUPABASE_URL and SUPABASE_KEY in your environment.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function main() {
  const assetsDir = await resolveAssetsDir()
  if (!assetsDir) {
    console.error('Assets directory not found. Checked:', ASSETS_DIRS.join(', '))
    process.exit(1)
  }

  await ensureBucket()

  const files = await collectAssetFiles(assetsDir)
  if (!files.length) {
    console.log('No assets found to upload.')
    return
  }

  const index = await readIndex()
  let uploads = 0

  for (const filePath of files) {
    try {
      const relative = path.relative(assetsDir, filePath)
      const ext = path.extname(filePath).toLowerCase()

      if (!allowedExtensions.has(ext)) {
        continue
      }

      const category = deriveCategory(relative)
      const sanitizedCategory = sanitize(category)
      const baseName = path.basename(filePath, ext)
      const sanitizedBase = sanitize(baseName)
      const uniqueId = crypto.randomBytes(3).toString('hex').slice(0, 5)
      const fileName = `genrec-${sanitizedCategory}-${sanitizedBase}-${uniqueId}.webp`
      const storagePath = `${SUPABASE_GALLERY_PATH}/${fileName}`

      if (index.some((entry) => entry.file === fileName || entry.url?.endsWith(fileName))) {
        console.log(`Skipping existing image: ${fileName}`)
        continue
      }

      const webpBuffer = await convertToWebp(filePath)

      const { error: uploadError } = await supabase.storage
        .from(SUPABASE_BUCKET)
        .upload(storagePath, webpBuffer, {
          contentType: 'image/webp',
          cacheControl: '31536000',
          upsert: false,
        })

      if (uploadError) {
        if (uploadError.message?.includes('exists')) {
          console.warn(`File already exists in bucket, skipping: ${fileName}`)
          continue
        }
        throw uploadError
      }

      const { data: publicData, error: publicError } = supabase.storage
        .from(SUPABASE_BUCKET)
        .getPublicUrl(storagePath)

      if (publicError || !publicData?.publicUrl) {
        throw publicError || new Error('Failed to obtain public URL')
      }

      const seoTags = buildSeoTags(category, baseName)
      const entry = {
        file: fileName,
        url: publicData.publicUrl,
        category,
        upload_date: new Date().toISOString(),
        used_in: USED_IN_SITES,
        seo_tags: seoTags,
      }

      index.push(entry)
      uploads += 1

      await registerBacklinks(publicData.publicUrl, USED_IN_SITES)

      console.log(`Uploaded: ${fileName}`)
    } catch (error) {
      console.error(`Failed to process ${filePath}:`, error.message)
    }
  }

  if (uploads > 0) {
    await writeIndex(index)
    console.log(`Completed uploads: ${uploads}`)
  } else {
    console.log('No new images uploaded.')
  }
}

async function resolveAssetsDir() {
  for (const dir of ASSETS_DIRS) {
    try {
      const stat = await fs.stat(dir)
      if (stat.isDirectory()) {
        return dir
      }
    } catch (error) {
      // ignore
    }
  }
  return null
}

async function collectAssetFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nested = await collectAssetFiles(fullPath)
      files.push(...nested)
    } else if (entry.isFile()) {
      files.push(fullPath)
    }
  }

  return files
}

function deriveCategory(relativePath) {
  const segments = relativePath.split(path.sep).filter(Boolean)
  if (segments.length > 1) {
    const primary = sanitize(segments[0])
    if (primary && primary !== 'images') {
      return primary
    }
    if (segments.length > 2) {
      const secondary = sanitize(segments[1])
      if (secondary) return secondary
    }
  }

  const base = path.basename(relativePath, path.extname(relativePath))
  const firstToken = sanitize(base).split('-')[0]
  return firstToken || 'general'
}

function sanitize(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function convertToWebp(filePath) {
  const buffer = await fs.readFile(filePath)
  return sharp(buffer).webp({ quality: 85 }).toBuffer()
}

async function readIndex() {
  if (!existsSync(INDEX_PATH)) {
    return []
  }

  try {
    const content = await fs.readFile(INDEX_PATH, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    console.warn('Failed to read gallery-index.json, starting fresh.', error.message)
    return []
  }
}

async function writeIndex(data) {
  const payload = JSON.stringify(data, null, 2)
  await fs.writeFile(INDEX_PATH, payload, 'utf8')
}

function buildSeoTags(category, baseName) {
  const words = sanitize(baseName)
    .split('-')
    .filter(Boolean)
    .map((word) => capitalize(word))
  const uniqueWords = Array.from(new Set([capitalize(category), 'Genrec', 'AI', ...words]))
  return uniqueWords
}

async function ensureBucket() {
  const { data, error } = await supabase.storage.getBucket(SUPABASE_BUCKET)
  if (data) {
    return
  }

  if (error && !/not found/i.test(error.message || '')) {
    console.error('Failed to verify bucket:', error.message)
    throw error
  }

  const { error: createError } = await supabase.storage.createBucket(SUPABASE_BUCKET, {
    public: true,
    fileSizeLimit: 50 * 1024 * 1024,
  })

  if (createError) {
    console.error('Failed to create bucket:', createError.message)
    throw createError
  }

  console.log(`Created bucket: ${SUPABASE_BUCKET}`)
}

async function registerBacklinks(publicUrl, sites) {
  const payloads = sites.map((site) => ({ image_url: publicUrl, used_in: site }))
  for (const payload of payloads) {
    try {
      const response = await fetch(BACKLINK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        console.warn(`Backlink registration failed for ${payload.used_in}: ${response.status}`)
      }
    } catch (error) {
      console.warn(`Backlink request error for ${payload.used_in}:`, error.message)
    }
  }
}

function parseListEnv(value) {
  if (!value) return null
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function capitalize(word) {
  if (!word) return word
  return word.charAt(0).toUpperCase() + word.slice(1)
}

main().catch((error) => {
  console.error('Unexpected error:', error)
  process.exit(1)
})
