import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome'
import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';

describe('The-Internet', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(new Options().headless()).build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('has a correct title', async () => {
        await driver.get('https://the-internet.herokuapp.com/');
        await driver.wait(until.elementLocated(By.css('h1')), 5000);
        const result = await driver.findElement(By.css('h1')).getText();
        expect(result).toEqual('Welcome to the-internet');
    });
});