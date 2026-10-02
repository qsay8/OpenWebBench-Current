const { test, expect } = require('@playwright/test');

test('page renders core sections and responsive content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /does your browser behave/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Contact form demo' })).toBeVisible();
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(page.getByRole('button', { name: 'Validate form' })).toBeVisible();
});

test('invalid form shows accessible feedback', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Validate form' }).click();
  await expect(page.locator('#form-status')).toHaveText('Please correct the highlighted fields.');
  await expect(page.locator('#name')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.locator('#name')).toBeFocused();
});

test('valid form announces confirmation', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Name').fill('Taylor');
  await page.getByLabel('Email address').fill('taylor@example.org');
  await page.getByRole('button', { name: 'Validate form' }).click();
  await expect(page.locator('#form-status')).toContainText('Thanks, Taylor.');
  await expect(page.locator('#email')).toHaveAttribute('aria-invalid', 'false');
});

test('counter supports increment, decrement and reset', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Increase count' }).click();
  await page.getByRole('button', { name: 'Increase count' }).click();
  await expect(page.locator('#count')).toHaveText('2');
  await page.getByRole('button', { name: 'Decrease count' }).click();
  await expect(page.locator('#count')).toHaveText('1');
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#count')).toHaveText('0');
});

test('primary controls are keyboard reachable', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'OpenWebBench home' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
});
