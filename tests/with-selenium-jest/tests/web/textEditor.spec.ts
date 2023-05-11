import { Builder, By, WebDriver, until, Key } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome'
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';

const iframeLocator = 'iframe[title="Rich Text Area"]';
const richTextAreaLocator = '#tinymce'; // vaild inside the iframe
const initialText = 'Your content goes here.';
const textFirstParagraph = 'Hello! this should be the title of our text.';
const textMiddleParagraph = 'This is a paragraph in the middle of the text.';
const textLastParagraph = 'This is the last paragraph. Good bye!';
const newText = [textFirstParagraph, textMiddleParagraph, textLastParagraph].join('\n');

describe('The-Internet WYSIWYG editor', () => {

    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome')
            .setChromeOptions(new Options().headless())
            .build();

    });

    beforeEach(async () => {
        await driver.get('https://the-internet.herokuapp.com/tinymce');
        await driver.wait(until.elementTextContains(
            driver.findElement(By.css('h3')),
            'An iFrame containing the TinyMCE WYSIWYG Editor')
        );
        await driver.wait(until.elementIsVisible(driver.findElement(By.css(iframeLocator))));
    });

    test('should have an initial text [T_20]', async () => {
        await driver.switchTo().frame(0);
        const iframeBodyText = await (await driver.findElement(By.css(richTextAreaLocator))).getText();
        await expect(iframeBodyText).toContain(initialText);
    });

    test('should be able to replace initial text by new one [T_21]', async () => {
        await driver.switchTo().frame(0);
        const richTextArea = driver.findElement(By.css(richTextAreaLocator));
        await expect(await richTextArea.getText()).toContain(initialText);
        await driver.findElement(By.css('p')).click();
        await driver.actions()
            .keyDown(Key.CONTROL).sendKeys('a').keyUp(Key.CONTROL)
            .sendKeys(newText).perform();
        await driver.wait(async () => {
            return driver.findElement(By.css('p')).getText().then((text) => {
                return (text && (text.trim()).length > 0 && text !== initialText);
            });
        }, 5000, 'text did not change');
        await expect(await richTextArea.getText()).toContain(textFirstParagraph);
        await expect(await richTextArea.getText()).toContain(textLastParagraph);
        await expect(await richTextArea.getText()).not.toContain(initialText);

    });

    test('should be able to delete last paragraph with keyboard shortcuts [T_22]', async () => {

        await driver.switchTo().frame(0);
        const richTextArea = driver.findElement(By.css(richTextAreaLocator));
        await expect(await richTextArea.getText()).toContain(initialText);
        await driver.findElement(By.css('p')).click();
        await driver.actions()
            .keyDown(Key.CONTROL).sendKeys('a').keyUp(Key.CONTROL)
            .sendKeys(newText).perform();
        await driver.wait(async () => {
            return driver.findElement(By.css('p')).getText().then((text) => {
                return (text && (text.trim()).length > 0 && text !== initialText);
            });
        }, 5000, 'text did not change');
        await expect(await richTextArea.getText()).toContain(textFirstParagraph);
        await expect(await richTextArea.getText()).toContain(textLastParagraph);
        await expect(await richTextArea.getText()).not.toContain(initialText);
        await driver.actions()
            .sendKeys(Key.END)
            .keyDown(Key.CONTROL).keyDown(Key.SHIFT)
            .sendKeys(Key.ARROW_UP)
            .keyUp(Key.CONTROL).keyUp(Key.SHIFT)
            .sendKeys(Key.DELETE).perform();
        await expect(await richTextArea.getText()).toContain(textFirstParagraph);
        await expect(await richTextArea.getText()).not.toContain(textLastParagraph);

    });

    afterAll(async () => { await driver.quit(); });

});