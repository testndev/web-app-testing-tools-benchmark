import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const toolsList = ['cypress', 'nightwatch', 'playwright', 'selenium-webdriver'];
const periodsList = ['1 Year', '2 Years', '5 Years', 'All time'];
const periodsTitles = {
    '1 Year': 'over the past year',
    '2 Years': 'over the past 2 years',
    '5 Years': 'over the past 5 years',
    'All time': 'since beginning'
}

const screenshotPath = (period)=> `./results/screenshots/NPM-trends ${toolsList.join('.')} - ${period}.png`; 

test('get NPM trends of those tools from npmtrends.com', async ({ page }) => {
    let markdown = '';
    const waitForResponses = toolsList.map(tool => page.waitForResponse(RegExp('.*' + tool + '.*')));
    const url = 'https://www.npmtrends.com/' + toolsList.join('-vs-');
    await page.goto(url);
    await expect(page).toHaveTitle(/.*NPM Trends.*/i);
    for (const period of periodsList) {
        await Promise.all([
            ...waitForResponses,
            page.waitForTimeout(2000), // wait for chart to render
            page.locator('select').selectOption({ label: period })
        ]); 
        markdown += `## NPM trend - ${periodsTitles[period]}\n\n`;
        markdown += `![${period}](${screenshotPath(period)})\n\n`;
        await page.locator('#download_chart').screenshot({ path: screenshotPath(period) });
    } 
    fs.writeFileSync('./results/NPM-trends.md', markdown);
});