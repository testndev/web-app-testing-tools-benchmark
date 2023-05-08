import { test, expect } from '@playwright/test';

test.describe('The-Internet', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
    });

    test('has a correct title [T_10]', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('Welcome to the-internet');
    });

    test('an error message appears if login with invalid username [T_11]', async ({ page }) => {
        await page.getByRole('link', { name: 'Form Authentication' }).click();
        await page.getByLabel('Username').fill('john');
        await page.getByLabel('Password').fill('password');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Your username is invalid!')).toBeVisible();
    });
});