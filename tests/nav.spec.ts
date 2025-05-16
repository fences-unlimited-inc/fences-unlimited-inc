import { test, expect } from '@playwright/test';

// Test that runs on all browsers
test('homepage has correct title', async ({ page }) => {
	await page.goto('/');

	// Expect the title to contain the company name
	await expect(page).toHaveTitle(/Fences Unlimited/);
});

test.describe('current page has current nav', () => {
	[
		{ href: '/', text: 'Home' },
		{ href: '/residential', text: 'Residential' },
		{ href: '/commercial', text: 'Commercial' },
		{ href: '/contact', text: 'Contact Us' }
	].forEach(async ({ href, text }) => {
		test(`${text} page`, async ({ page }) => {
			await page.goto('/');

			const hamburgerButton = page.locator('button[aria-label="Toggle navigation menu"]');
			const isExpanded = (await hamburgerButton.getAttribute('aria-expanded')) === 'true';
			if ((await hamburgerButton.isVisible()) && !isExpanded) {
				await hamburgerButton.click();
			}

			let navMenu = page.locator('nav');
			await expect(navMenu).toBeVisible();
			await navMenu.locator(`a:has-text("${text}")`).click();
			await expect(page).toHaveURL(href);
			navMenu = page.locator('nav');
			const currentNav = navMenu.locator('a[aria-current="true"]');
			await expect(currentNav).toHaveAttribute('href', href);
		});
	});
});

// Test with different screen sizes
test.describe('nav', () => {
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
