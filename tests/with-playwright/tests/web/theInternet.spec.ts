import { test, expect } from '@playwright/test';

test.describe('The-Internet', () => {
    test('has a correct title', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
        await expect(page.locator('h1')).toHaveText('Welcome to the-internet');
    });
});