import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const toolsList = ['@playwright/test', 'cypress', 'nightwatch', 'selenium-webdriver'];

const url = `https://www.npmtrends.com/${toolsList.join('-vs-')}`;

const periodsTitles = {
    '1 Year': 'over the past year',
    '2 Years': 'over the past 2 years',
    '5 Years': 'over the past 5 years',
    'All time': 'since beginning'
}

const periodsList = Object.keys(periodsTitles);
const screenshotDir = './results/img/300/';
const screenshotPath = (period) => screenshotDir + `NPMtrends-${toolsList.join('.')}-${period}.png`.replace(/\s/g, '_').replace(/[@\/]/g, '');

test('get NPM trends of those tools from npmtrends.com', async ({ page }) => {
    let markdown = `# NPM trends - ${toolsList.join('/')}\n\n`;
    markdown += `From [npm trends](${url})\n\n`;
    const waitForResponses = toolsList.map(tool => page.waitForResponse(RegExp('.*' + tool + '.*')));

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