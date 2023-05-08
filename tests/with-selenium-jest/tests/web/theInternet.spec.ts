import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome'
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';

describe('The-Internet', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(new Options().headless()).build();
    });

    beforeEach(async () => {
        await driver.get('https://the-internet.herokuapp.com/');
    });

    test('has a correct title [T_10]', async () => {
        await driver.wait(until.elementLocated(By.css('h1')), 5000);
        const result = await driver.findElement(By.css('h1')).getText();
        expect(result).toEqual('Welcome to the-internet');
    });

    test('an error message appears if login with invalid username [T_11]', async () => {
        await driver.findElement(By.linkText('Form Authentication')).click();
        await driver.wait(until.elementLocated(By.name('username')));
        await driver.findElement(By.name('username')).sendKeys('john');
        await driver.findElement(By.name('password')).sendKeys('password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        const message = await driver.findElement(By.id('flash')).getText();
        expect(message).toContain('Your username is invalid!');
    });

    afterAll(async () => { await driver.quit(); });

});