import { test, expect } from '@playwright/test';
import listOfLinks from "../../../listOfLinks";

test.describe.parallel('The-Internet, navigate to pages [S_3]', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('h1')).toHaveText('Welcome to the-internet');
    });

    for (const [i, { targetPageTitlePartialText, linkUrl, linkText }] of listOfLinks.entries()) {
        const testId = 300 + i;
        test(`should navigate to "${linkUrl}" page by clicking on link [T_${testId}]`, async ({ page }) => {
            const link = page.locator(`a[href="${linkUrl}"]`)
            await expect(link).toBeVisible();
            await expect(link).toHaveText(linkText);
            await Promise.all([page.waitForURL(linkUrl), link.click()]);
            const firstTitle = page.getByRole('heading').first();
            await expect(firstTitle).toBeVisible();
            await expect(firstTitle).toContainText(targetPageTitlePartialText);
        });

    }

});