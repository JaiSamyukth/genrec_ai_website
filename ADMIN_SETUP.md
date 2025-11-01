# Admin Panel Setup Guide

## Admin Access

The admin panel is now accessible at: `/admin`

### Admin Credentials
- **Password:** `genrec_admin_2025`

**Note:** This is a protected route that cannot be accessed directly without authentication. The password is stored in the component and must be entered to access the admin features.

## Features

### 1. Blog Admin
- Create new blog posts
- Edit existing posts
- Delete posts
- Set publish status (draft or published)
- Full markdown support for content
- Auto-generate slugs from titles

### 2. Gallery Admin
- Upload images with drag-and-drop support
- Each uploaded image gets a unique URL
- Copy image URLs to clipboard
- Delete images from gallery
- View image details (name, size, upload date)
- Images are stored in browser localStorage (in production, should be moved to cloud storage)

## How to Use

### Accessing Admin Panel
1. Navigate to `https://yourdomain.com/admin`
2. Enter the admin password: `genrec_admin_2025`
3. Click "Access Admin Panel"

### Managing Blog Posts
1. Click on the "Blog Admin" tab
2. Click "Create New Post" to add a new post
3. Fill in all required fields:
   - Title (required)
   - Excerpt (required)
   - Content (required, markdown supported)
   - Cover Image URL (optional, use URLs from Gallery)
   - Author, Category, Read Time
4. Check "Publish immediately" to make it live
5. Click "Save Post"

### Managing Gallery Images
1. Click on the "Gallery Admin" tab
2. Click or drag-and-drop to upload images
3. Once uploaded, click "Copy URL" to get the unique image link
4. Use this URL in blog posts or other content
5. Click the trash icon to delete an image

## Security Notes

### Current Implementation (Development)
- Password is stored in component code
- Session-based authentication (clears on browser close)
- LocalStorage for image data

### Production Recommendations
1. Move admin password to environment variables
2. Implement proper JWT-based authentication
3. Add database for blog posts and images
4. Use cloud storage (AWS S3, Cloudflare R2) for images
5. Add role-based access control
6. Implement audit logging
7. Add rate limiting

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Main admin panel
│   ├── api/
│   │   └── gallery/
│   │       └── [id]/
│   │           └── route.ts  # Gallery API endpoint
│   └── blog/
│       └── admin/
│           └── page.tsx      # Old blog admin (now replaced by /admin)
└── components/
    ├── ParallaxCarousel.tsx  # Carousel for hero section
    └── ScrollIndicator.tsx   # Scroll indicator animation
```

## Migrating from Blog Admin

The old `/blog/admin` route still exists but has been superseded by the new unified `/admin` panel. 

To migrate:
1. Use `/admin` for all admin operations
2. The blog admin functionality is now a tab in the main admin panel
3. Gallery management is now integrated alongside blog management

## Future Enhancements

- [ ] Add image cropping and editing
- [ ] Bulk image upload
- [ ] Image search and filtering
- [ ] Blog post categories management
- [ ] Analytics dashboard
- [ ] SEO metadata editor
- [ ] Preview before publish
- [ ] Scheduled publishing
- [ ] Multi-user support with roles
- [ ] Activity logs
