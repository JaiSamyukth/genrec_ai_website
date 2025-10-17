import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Genrec AI/)
  })

  test('displays hero section with main CTA', async ({ page }) => {
    // Check hero heading
    const heroHeading = page.getByRole('heading', { level: 1 })
    await expect(heroHeading).toContainText('Privacy-first AI')
    
    // Check main CTA button
    const ctaButton = page.getByRole('link', { name: /request.*demo/i })
    await expect(ctaButton).toBeVisible()
  })

  test('navigation menu works correctly', async ({ page }) => {
    // Check desktop navigation
    if (await page.viewportSize()?.width! >= 1024) {
      const productsMenu = page.getByRole('button', { name: /products/i })
      await productsMenu.click()
      
      // Check if dropdown appears with product links
      await expect(page.getByRole('link', { name: /tabble/i })).toBeVisible()
      await expect(page.getByRole('link', { name: /lumina iq/i })).toBeVisible()
      await expect(page.getByRole('link', { name: /construct ai/i })).toBeVisible()
    }
  })

  test('products section displays all four products', async ({ page }) => {
    const productsSection = page.locator('#products')
    await productsSection.scrollIntoViewIfNeeded()
    
    // Check all product cards are visible
    await expect(page.getByText('Tabble')).toBeVisible()
    await expect(page.getByText('Lumina IQ')).toBeVisible()
    await expect(page.getByText('Construct AI')).toBeVisible()
    await expect(page.getByText('Restaurant Tech Suite')).toBeVisible()
  })

  test('footer contains essential links', async ({ page }) => {
    const footer = page.locator('footer')
    await footer.scrollIntoViewIfNeeded()
    
    // Check company info
    await expect(footer.getByText('Genrec')).toBeVisible()
    
    // Check essential links
    await expect(footer.getByRole('link', { name: /privacy policy/i })).toBeVisible()
    await expect(footer.getByRole('link', { name: /terms of service/i })).toBeVisible()
    await expect(footer.getByRole('link', { name: /contact/i })).toBeVisible()
    
    // Check email
    await expect(footer.getByText('contact@genrecai.com')).toBeVisible()
  })

  test('cookie banner appears and can be dismissed', async ({ page }) => {
    // Clear localStorage to ensure cookie banner appears
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    
    // Check cookie banner is visible
    const cookieBanner = page.getByText(/we use cookies/i)
    await expect(cookieBanner).toBeVisible()
    
    // Accept cookies
    const acceptButton = page.getByRole('button', { name: /accept cookies/i })
    await acceptButton.click()
    
    // Check banner disappears
    await expect(cookieBanner).not.toBeVisible()
    
    // Reload and check it doesn't reappear
    await page.reload()
    await expect(cookieBanner).not.toBeVisible()
  })

  test('mobile menu works correctly', async ({ page, isMobile }) => {
    if (isMobile) {
      // Click hamburger menu
      const menuButton = page.getByRole('button', { name: /toggle.*menu/i })
      await menuButton.click()
      
      // Check mobile menu is visible
      await expect(page.getByRole('link', { name: /case studies/i })).toBeVisible()
      await expect(page.getByRole('link', { name: /about/i })).toBeVisible()
      await expect(page.getByRole('link', { name: /blog/i })).toBeVisible()
    }
  })

  test('page has proper accessibility attributes', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = await page.locator('h1').count()
    expect(h1).toBe(1)
    
    // Check images have alt text
    const images = page.locator('img')
    const imageCount = await images.count()
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i)
      const altText = await img.getAttribute('alt')
      expect(altText).toBeTruthy()
    }
    
    // Check buttons have accessible labels
    const buttons = page.locator('button')
    const buttonCount = await buttons.count()
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute('aria-label')
      const textContent = await button.textContent()
      expect(ariaLabel || textContent).toBeTruthy()
    }
  })

  test('page loads quickly', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/', { waitUntil: 'networkidle' })
    const loadTime = Date.now() - startTime
    
    // Page should load in under 3 seconds
    expect(loadTime).toBeLessThan(3000)
  })
})
