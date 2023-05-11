import { Builder, By, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome'
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';

describe('The-Internet', () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').setChromeOptions(new Options().headless()).build();
    });

    beforeEach(async () => {
        await driver.get('https://the-internet.herokuapp.com/login');
    });

    test('should accept user with valid credentials [T_10]', async () => {
        await driver.findElement(By.name('username')).sendKeys('tomsmith');
        await driver.findElement(By.name('password')).sendKeys('SuperSecretPassword!');
        await driver.findElement(By.css('button[type="submit"]')).click();
        const message = await driver.findElement(By.id('flash')).getText();
        await expect(message).toContain('You logged into a secure area!');
    });

    test('should display error message for incorrect username [T_11]', async () => {
        await driver.findElement(By.name('username')).sendKeys('john');
        await driver.findElement(By.name('password')).sendKeys('pa55w0rd');
        await driver.findElement(By.css('button[type="submit"]')).click();
        const message = await driver.findElement(By.id('flash')).getText();
        await expect(message).toContain('Your username is invalid!');
    });


    test('should display error message for incorrect password [T_12]', async () => {
        await driver.findElement(By.name('username')).sendKeys('tomsmith');
        await driver.findElement(By.name('password')).sendKeys('incorrect_password');
        await driver.findElement(By.css('button[type="submit"]')).click();
        const message = await driver.findElement(By.id('flash')).getText();
        await expect(message).toContain('Your password is invalid!');
    });

    afterAll(async () => { await driver.quit(); });

});