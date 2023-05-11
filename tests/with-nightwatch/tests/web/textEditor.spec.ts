const iframeLocator = 'iframe[title="Rich Text Area"]';
const richTextAreaLocator = '#tinymce'; // vaild inside the iframe
const initialText = 'Your content goes here.';
const textFirstParagraph = 'Hello! this should be the title of our text.';
const textMiddleParagraph = 'This is a paragraph in the middle of the text.';
const textLastParagraph = 'This is the last paragraph. Good bye!';
const newText = [textFirstParagraph, textMiddleParagraph, textLastParagraph].join('\n');

describe('The-Internet WYSIWYG editor', () => {

    beforeEach(browser => {
        browser
            .navigateTo('/tinymce')
            .waitForElementVisible(iframeLocator)
            .assert.textContains('h3', 'An iFrame containing the TinyMCE WYSIWYG Editor');
    });


    it('should have an initial text [T_20]', (browser) => {
        browser
            .waitForElementPresent(iframeLocator)
            .frame(0)
            .assert.textContains(richTextAreaLocator, initialText);
    });


    it('should be able to replace initial text by new one [T_21]', (browser) => {
        browser
            .waitForElementPresent(iframeLocator)
            .frame(0)
            .assert.textContains(richTextAreaLocator, initialText)
            .sendKeys(richTextAreaLocator, [browser.Keys.CONTROL, 'a'])
            .setValue(richTextAreaLocator, newText)
            .assert.textContains(richTextAreaLocator, textFirstParagraph)
            .assert.textContains(richTextAreaLocator, textLastParagraph)
            .assert.not.textContains(richTextAreaLocator, initialText);

    });

    it('should be able to delete last paragraph with keyboard shortcuts [T_22]', (browser) => {
        browser
            .waitForElementPresent(iframeLocator)
            .frame(0)
            .assert.textContains(richTextAreaLocator, initialText)
            .sendKeys(richTextAreaLocator, [browser.Keys.CONTROL, 'a'])
            .setValue(richTextAreaLocator, newText)
            .assert.textContains(richTextAreaLocator, textFirstParagraph)
            .assert.textContains(richTextAreaLocator, textLastParagraph)
            .assert.not.textContains(richTextAreaLocator, initialText)
            .sendKeys(richTextAreaLocator, [browser.Keys.END])
            .sendKeys(richTextAreaLocator, [browser.Keys.CONTROL, browser.Keys.SHIFT, browser.Keys.ARROW_UP])
            .sendKeys(richTextAreaLocator, [browser.Keys.DELETE])
            .assert.textContains(richTextAreaLocator, textFirstParagraph)
            .assert.not.textContains(richTextAreaLocator, textLastParagraph)

    });

});