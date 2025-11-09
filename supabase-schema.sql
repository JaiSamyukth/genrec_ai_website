-- =====================================================
-- Genrec AI Website - Supabase Database Schema
-- =====================================================
-- Run this in Supabase SQL Editor to set up your database
-- Dashboard: https://supabase.com/dashboard/project/znnbucjbyruzcdheylzv

-- =====================================================
-- 1. BLOGS TABLE
-- =====================================================

create table if not exists public.blogs (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image text default 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070',
  author text default 'Genrec AI Team',
  date date default current_date,
  category text default 'AI Innovation',
  read_time text default '5 min read',
  published boolean default false
);

-- Add updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger set_blogs_updated_at
  before update on public.blogs
  for each row
  execute function public.handle_updated_at();

-- Enable Row Level Security
alter table public.blogs enable row level security;

-- Policy: Anyone can read published blogs
create policy "Public can read published blogs"
  on public.blogs
  for select
  using (published = true);

-- Policy: Authenticated users can read all blogs (for admin)
create policy "Authenticated can read all blogs"
  on public.blogs
  for select
  using (auth.role() = 'authenticated');

-- Policy: Service role can do everything (for API routes)
create policy "Service role can manage blogs"
  on public.blogs
  for all
  using (auth.role() = 'service_role');

-- =====================================================
-- 2. GALLERY IMAGES TABLE
-- =====================================================

create table if not exists public.gallery_images (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  url text not null,
  size integer not null,
  uploaded_by text default 'admin'
);

-- Enable Row Level Security
alter table public.gallery_images enable row level security;

-- Policy: Anyone can read gallery images
create policy "Public can read gallery images"
  on public.gallery_images
  for select
  using (true);

-- Policy: Service role can manage gallery images
create policy "Service role can manage gallery images"
  on public.gallery_images
  for all
  using (auth.role() = 'service_role');

-- =====================================================
-- 3. CONTACT MESSAGES TABLE
-- =====================================================

create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  full_name text not null,
  role text not null,
  company text not null,
  email text not null,
  phone text,
  product text not null,
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'replied', 'archived'))
);

-- Enable Row Level Security
alter table public.contact_messages enable row level security;

-- Policy: Only service role can read/write contact messages
create policy "Service role can manage contact messages"
  on public.contact_messages
  for all
  using (auth.role() = 'service_role');

-- =====================================================
-- 4. INDEXES FOR PERFORMANCE
-- =====================================================

-- Blogs indexes
create index if not exists blogs_published_idx on public.blogs(published);
create index if not exists blogs_slug_idx on public.blogs(slug);
create index if not exists blogs_date_idx on public.blogs(date desc);
create index if not exists blogs_category_idx on public.blogs(category);

-- Gallery indexes
create index if not exists gallery_created_at_idx on public.gallery_images(created_at desc);

-- Contact messages indexes
create index if not exists contact_status_idx on public.contact_messages(status);
create index if not exists contact_created_at_idx on public.contact_messages(created_at desc);

-- =====================================================
-- 5. SEED DATA (Optional - Uncomment to add sample blog)
-- =====================================================

/*
insert into public.blogs (title, slug, excerpt, content, published) values
(
  'Welcome to Genrec AI',
  'welcome-to-genrec-ai',
  'Learn about our mission to build intelligent systems that work where others fail.',
  '# Welcome to Genrec AI

We build intelligent systems that work where others fail — software designed for performance, not pretense.

## Our Approach

Founded by Jai Samyukth B U and Shyamnath Sankar, with Harish V as Technical Lead, we build from nothing but code, caffeine, and conviction.

**No investors. No paid tools. No noise. Just pure engineering.**

## What We Build

- Custom AI Solutions
- SaaS Platforms
- ERP & CRM Systems
- Process Automation
- Machine Learning Models

## Our Philosophy

Innovation here isn''t a tagline — it''s survival. We don''t chase trends. We build products that outlast them.

Ready to work with us? [Get in touch](/contact).',
  true
);
*/

-- =====================================================
-- SETUP COMPLETE!
-- =====================================================
-- Next steps:
-- 1. Verify tables were created: Check the Table Editor in Supabase
-- 2. Test API: Visit /api/blogs in your Next.js app
-- 3. Add data: Use the admin panel at /admin
-- =====================================================
