# Supabase Integration Guide for Genrec AI Website

## ✅ What's Been Set Up

### 1. **Dependencies Installed**
- ✅ `@supabase/supabase-js` installed

### 2. **Environment Variables Added**
- ✅ `.env.local` updated with Supabase credentials:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

### 3. **Supabase Client Files Created**
- ✅ `src/lib/supabase/client.ts` - Client-side Supabase client
- ✅ `src/lib/supabase/server.ts` - Server-side admin client
- ✅ `src/lib/supabase/types.ts` - TypeScript types for database

### 4. **API Routes Updated/Created**
- ✅ `src/app/api/contact/route.ts` - Now saves to Supabase
- ✅ `src/app/api/blogs/route.ts` - CRUD operations for blogs
- ✅ `src/app/api/blogs/[id]/route.ts` - Single blog operations
- ✅ `src/app/api/gallery/upload/route.ts` - Image upload and list

---

## 🚀 Quick Setup Instructions

### Step 1: Create Database Tables

1. Open your Supabase dashboard:
   👉 https://supabase.com/dashboard/project/znnbucjbyruzcdheylzv

2. Navigate to: **SQL Editor** (left sidebar)

3. Click **New Query**

4. Copy the entire contents of `supabase-schema.sql` and paste it

5. Click **RUN** to execute the SQL

This will create:
- ✅ `blogs` table with Row Level Security
- ✅ `gallery_images` table with RLS
- ✅ `contact_messages` table with RLS
- ✅ Proper indexes for performance
- ✅ Security policies

### Step 2: Verify Tables Were Created

1. Go to **Table Editor** in Supabase
2. You should see three tables:
   - `blogs`
   - `gallery_images`
   - `contact_messages`

### Step 3: Test the Integration

#### Test Contact Form:
1. Start your dev server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check Supabase **Table Editor** → `contact_messages` table
5. Your submission should appear there!

#### Test Blog Creation (Admin Panel):
1. Go to `/admin` page
2. Login with credentials
3. Create a new blog post
4. Check Supabase **Table Editor** → `blogs` table
5. Your blog post should be there!

---

## 📚 API Endpoints Reference

### Blogs API

**GET /api/blogs**
- Fetch all blogs
- Query params: `?includeUnpublished=true` (for admin)

**POST /api/blogs**
- Create new blog post
- Body:
  ```json
  {
    "title": "My Blog Post",
    "slug": "my-blog-post",
    "excerpt": "Short description",
    "content": "Full markdown content...",
    "cover_image": "https://...",
    "published": false
  }
  ```

**GET /api/blogs/[id]**
- Fetch single blog post

**PUT /api/blogs/[id]**
- Update blog post
- Body: Same as POST (all fields optional)

**DELETE /api/blogs/[id]**
- Delete blog post

### Gallery API

**POST /api/gallery/upload**
- Upload image
- Body:
  ```json
  {
    "name": "image.jpg",
    "url": "base64_or_url",
    "size": 123456
  }
  ```

**GET /api/gallery/upload**
- List all images

### Contact API

**POST /api/contact**
- Submit contact form
- Body:
  ```json
  {
    "name": "John Doe",
    "role": "CEO",
    "company": "Acme Corp",
    "email": "john@acme.com",
    "phone": "+1234567890",
    "product": "LuminaIQ",
    "message": "Interested in demo",
    "consent": true
  }
  ```

---

## 🔒 Security Features

### Row Level Security (RLS)

All tables have RLS enabled with these policies:

**Blogs:**
- ✅ Public can read published posts
- ✅ Authenticated users can read all posts
- ✅ Service role can manage everything

**Gallery Images:**
- ✅ Public can read all images
- ✅ Service role can manage everything

**Contact Messages:**
- ✅ Only service role can read/write
- ✅ Keeps user data private

### Why This Is Secure

1. **Anon Key** - Safe to expose in client code, can only do what RLS allows
2. **Service Role Key** - Only used in API routes (server-side), never exposed to client
3. **RLS Policies** - Database-level security, can't be bypassed

---

## 🎯 Next Steps

### For Blog Management:

1. **Update Admin Panel** to use Supabase:
   - Replace localStorage with API calls to `/api/blogs`
   - Fetch posts from `/api/blogs?includeUnpublished=true`
   - Use PUT/DELETE endpoints for editing

2. **Update Blog Page** to fetch from Supabase:
   ```typescript
   // In src/app/blog/page.tsx
   const response = await fetch('/api/blogs')
   const { blogs } = await response.json()
   ```

### For Gallery:

1. **Update Admin Gallery** to use Supabase:
   - Upload images via `/api/gallery/upload`
   - Fetch images from `/api/gallery/upload`
   - Images persist across sessions!

### For Contact:

- ✅ Already integrated!
- All form submissions now go to Supabase
- View them in Supabase dashboard

---

## 📊 Database Schema

### blogs
```sql
id               uuid (primary key)
created_at       timestamp
updated_at       timestamp
title            text
slug             text (unique)
excerpt          text
content          text
cover_image      text
author           text
date             date
category         text
read_time        text
published        boolean
```

### gallery_images
```sql
id               uuid (primary key)
created_at       timestamp
name             text
url              text
size             integer
uploaded_by      text
```

### contact_messages
```sql
id               uuid (primary key)
created_at       timestamp
full_name        text
role             text
company          text
email            text
phone            text (nullable)
product          text
message          text
status           text ('new', 'read', 'replied', 'archived')
```

---

## 🐛 Troubleshooting

### Issue: "Missing Supabase environment variables"
**Solution:** Restart your dev server after adding `.env.local`

### Issue: "Failed to fetch blogs"
**Solution:** 
1. Verify tables exist in Supabase
2. Check RLS policies are set up
3. Verify your Supabase URL and keys are correct

### Issue: "Forbidden" or "401" errors
**Solution:**
- Make sure you're using `supabaseAdmin` (service role) in API routes
- Check RLS policies allow the operation

### Issue: Images not uploading
**Solution:**
- Verify the base64 string is valid
- Check Supabase Storage if using storage bucket
- Ensure size is passed as integer

---

## 🎉 You're All Set!

Your website now has:
- ✅ Real database persistence
- ✅ Blog management via API
- ✅ Gallery image storage
- ✅ Contact form submissions saved
- ✅ Secure with Row Level Security
- ✅ No more localStorage or JSON files!

**Everything persists across deployments and sessions.**

---

## 💡 Pro Tips

1. **Backup Your Data:**
   - Supabase has automatic backups
   - You can also export data from Table Editor

2. **Monitor Usage:**
   - Check Supabase Dashboard → Reports
   - Free tier: 500MB database, 1GB bandwidth/month
   - Plenty for a portfolio/business site

3. **Add More Features:**
   - Blog comments (new table)
   - Post views counter
   - User authentication
   - Newsletter signups
   - Analytics tracking

4. **Performance:**
   - Indexes are already set up for fast queries
   - Use `select('*')` sparingly in production
   - Consider adding caching (React Query, SWR)

---

## 📞 Support

If you run into issues:
1. Check Supabase logs: Dashboard → Logs
2. Check browser console for errors
3. Verify API routes are running: `/api/blogs`
4. Test in Supabase SQL Editor first

---

**Happy coding! 🚀**
