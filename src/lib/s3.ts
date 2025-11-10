import { randomBytes } from 'crypto'
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'

const s3Config = {
  endpoint: process.env.SUPABASE_S3_ENDPOINT || '',
  region: process.env.SUPABASE_S3_REGION || 'ap-southeast-1',
  credentials: {
    accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY || '',
  },
  forcePathStyle: true,
}

export const s3Client =
  s3Config.credentials.accessKeyId && s3Config.credentials.secretAccessKey
    ? new S3Client(s3Config)
    : null

const BUCKET_NAME = process.env.SUPABASE_S3_BUCKET || 'gallery'
const S3_FOLDER = (process.env.SUPABASE_S3_FOLDER || 'gallery').replace(/^\/+/g, '').replace(/\/+$/g, '')

export async function uploadImageToS3(
  file: Buffer,
  fileName: string,
  contentType: string,
  options?: { category?: string }
): Promise<string> {
  if (!s3Client) {
    throw new Error('S3 client is not configured. Please check your environment variables.')
  }

  const key = buildObjectKey(fileName, contentType, options?.category)

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  })

  await s3Client.send(command)

  return getS3PublicUrl(key)
}

export async function deleteImageFromS3(imageUrl: string): Promise<void> {
  if (!s3Client) {
    throw new Error('S3 client is not configured. Please check your environment variables.')
  }

  const urlParts = imageUrl.split(`/${BUCKET_NAME}/`)
  if (urlParts.length < 2) {
    throw new Error('Invalid image URL format')
  }

  const key = urlParts[1]

  const command = new DeleteObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  })

  await s3Client.send(command)
}

export function getS3PublicUrl(key: string): string {
  const endpoint = process.env.SUPABASE_S3_ENDPOINT || ''
  return `${endpoint.replace('/storage/v1/s3', '')}/storage/v1/object/public/${BUCKET_NAME}/${key}`
}

function buildObjectKey(fileName: string, contentType: string, category?: string) {
  const sanitizedCategory = sanitize(category) || 'general'
  const { baseName, extension } = parseFileName(fileName, contentType)
  const uniqueId = randomBytes(3).toString('hex').slice(0, 5)
  const finalName = `genrec-${sanitizedCategory}-${baseName}-${uniqueId}.${extension}`
  return `${S3_FOLDER}/${finalName}`
}

function parseFileName(fileName: string, contentType: string) {
  const sanitizedBase = sanitize(fileName.replace(/\.[^/.]+$/, '')) || 'asset'
  const extMatch = fileName.match(/\.([a-z0-9]+)$/i)
  const extension = extMatch?.[1]?.toLowerCase() || mimeToExtension(contentType) || 'bin'
  return { baseName: sanitizedBase, extension }
}

function mimeToExtension(mime: string) {
  switch (mime) {
    case 'image/jpeg':
    case 'image/jpg':
      return 'jpg'
    case 'image/png':
      return 'png'
    case 'image/webp':
      return 'webp'
    case 'image/gif':
      return 'gif'
    case 'image/svg+xml':
      return 'svg'
    default:
      return undefined
  }
}

function sanitize(value?: string | null) {
  if (!value) return ''
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
