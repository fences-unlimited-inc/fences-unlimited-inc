import { test, expect } from '@playwright/test';

// Test that runs on all browsers
test('homepage has correct title', async ({ page }) => {
	await page.goto('/');

	// Expect the title to contain the company name
	await expect(page).toHaveTitle(/Fences Unlimited/);
});

// Test with different screen sizes
test.describe('responsive design tests', () => {
	test('navigation menu is visible on desktop', async ({ page }) => {
		// Set viewport to desktop size
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto('/');

		// Check that the navigation menu is visible
		const navMenu = page.locator('nav');
		await expect(navMenu).toBeVisible();
	});

	test('navigation menu collapses on mobile', async ({ page }) => {
		// Set viewport to mobile size
		await page.setViewportSize({ width: 375, height: 667 });
		await page.goto('/');

		// Check for a mobile menu button or collapsed menu
		// This will depend on your actual implementation
		const mobileMenuButton = page.locator('nav button[aria-controls="main-navigation-links"]');
		await expect(mobileMenuButton).toBeVisible();
	});
});

// Test navigation between pages
test('can navigate to contact page', async ({ page }) => {
	await page.setViewportSize({ width: 1280, height: 800 });
	await page.goto('/');

	// Find and click the contact link
	await page.locator('nav a:has-text("Contact Us")').click();

	// Verify we're on the contact page
	await expect(page).toHaveURL(/.*contact/);

	// Verify contact page content is visible
	const contactHeading = page.locator('h1:has-text("Contact Us")');
	await expect(contactHeading).toBeVisible();
});
