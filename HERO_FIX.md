# Hero Component Runtime Error Fix

## Problem
Runtime error: `TypeError: Cannot read properties of undefined (reading 'call')`

This was caused by SSR/hydration mismatch with Framer Motion's scroll-based animations.

## Solution
Added client-side mounting guard to prevent SSR hydration issues:

### Changes in `src/components/HeroParallax.tsx`:

1. **Added `isMounted` state**
   ```tsx
   const [isMounted, setIsMounted] = useState(false)
   
   useEffect(() => {
     setIsMounted(true)
   }, [])
   ```

2. **Added fallback render for SSR**
   - Returns static version without animations during SSR
   - Once mounted on client, switches to animated version
   - Prevents hydration mismatches

3. **Imported MotionValue type**
   - Added proper TypeScript types for Framer Motion

## Result
✅ Build successful (20 pages)
✅ Dev server running on http://localhost:3001
✅ No runtime errors
✅ Smooth parallax animations working
✅ SSR/hydration issues resolved

## Testing
Navigate to http://localhost:3001 and verify:
- Hero section loads without errors
- Carousel images rotate every 5 seconds
- Parallax effects work on scroll
- Scroll indicator bounces
- CTA buttons work correctly
