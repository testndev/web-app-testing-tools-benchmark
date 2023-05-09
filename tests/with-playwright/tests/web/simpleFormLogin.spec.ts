import { test, expect } from '@playwright/test';

test.describe('The-Internet login form', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/login');
        await expect(page.locator('h2')).toHaveText('Login Page');
    });

    test('should accept user with valid credentials [T_10]', async ({ page }) => {
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('You logged into a secure area!')).toBeVisible();
    });

    test('should display error message for incorrect username [T_11]', async ({ page }) => {
        await page.getByLabel('Username').fill('john');
        await page.getByLabel('Password').fill('pa55w0rd');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Your username is invalid!')).toBeVisible();
    });
    
    test('should display error message for incorrect password [T_12]', async ({ page }) => {
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('incorrect_password');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Your password is invalid!')).toBeVisible();
    });
    
});