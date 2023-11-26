import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const toolsNamesList = ['@playwright/test', 'cypress', 'nightwatch', 'selenium-webdriver', 'webdriverio'];
const toolsLinksList = toolsNamesList.map(tool => `[${tool}](https://www.npmjs.com/package/${tool})`);

const url = `https://www.npmtrends.com/${toolsNamesList.join('-vs-')}`;

const periodsTitles = {
    '1 Year': 'over the past year',
    '2 Years': 'over the past 2 years',
    '5 Years': 'over the past 5 years',
    'All time': 'since beginning'
}

const periodsList = Object.keys(periodsTitles);
const screenshotDir = './results/img/300/';
const screenshotPath = (period) => screenshotDir + `NPMtrends-${toolsNamesList.join('.')}-${period}.png`.replace(/\s/g, '_').replace(/[@\/]/g, '');

test('get NPM trends of those tools from npmtrends.com', async ({ page }) => {
    let markdown = `### NPM trend - graphs\n\n`;
    markdown += `Comparison of the tools: \n ${toolsLinksList.map(link => `- ${link}`).join('\n')}\n\n`;
    markdown += `Graphs copied from [npm trends](${url})\n\n`;
    markdown += `| period | npm trend graph  |\n| - | - |\n`;
    const waitForResponses = toolsNamesList.map(tool => page.waitForResponse(RegExp('.*' + tool + '.*')));

    await page.goto(url);
    await expect(page).toHaveTitle(/.*NPM Trends.*/i);
    for (const period of periodsList) {
        await Promise.all([
            ...waitForResponses,
            page.waitForTimeout(2000), // wait for chart to render
            page.locator('select').selectOption({ label: period })
        ]);
        markdown += `| ${periodsTitles[period]} | ![${period}](${screenshotPath(period)}) | \n`;
        await page.locator('#download_chart').screenshot({ path: screenshotPath(period) });
    }
    fs.writeFileSync('./results/NPM-trends.md', markdown);
});