const iframeLocator = 'iframe[title="Rich Text Area"]';

const initialText = 'Your content goes here.';

const textFirstParagraph = 'Hello! this should be the title of our text.';
const textMiddleParagraph = 'This is a paragraphin the middle';
const textLastParagraph = 'This is the last paragraph. Good bye!';

const newText = [textFirstParagraph, textMiddleParagraph, textLastParagraph].join('\n');

describe('The-Internet WYSIWYG editor', () => {
    beforeEach(browser => {
        browser
            .navigateTo('/tinymce')
            .waitForElementVisible('body')
            .assert.textContains('h3', 'An iFrame containing the TinyMCE WYSIWYG Editor')
            .waitForElementPresent(iframeLocator);
    });


    it('should have an initial text [T_20]', (browser) => {
        browser
        .waitForElementPresent(iframeLocator)
            .frame('mce_0_ifr')
            .assert.textContains('body', initialText);
    });


    it('should be able to replace initial text by new one [T_21]', (browser) => {
        browser
            .waitForElementPresent(iframeLocator)
            .frame('mce_0_ifr')
            .assert.textContains('body', initialText)
            .sendKeys('#tinymce', [browser.Keys.CONTROL, 'a'])
            .setValue('#tinymce', newText)
            .assert.textContains('body', textFirstParagraph)
            .assert.textContains('body', textLastParagraph)
            .assert.not.textContains('body', initialText);

    });

    it('should be able to delete last paragraph with keyboard shortcuts [T_22]', (browser) => {


        browser
            .waitForElementPresent(iframeLocator)
            .frame('mce_0_ifr')
            .assert.textContains('body', initialText)
            .sendKeys('#tinymce', [browser.Keys.CONTROL, 'a'])
            .setValue('#tinymce', newText)
            .assert.textContains('body', textFirstParagraph)
            .assert.textContains('body', textLastParagraph)
            .assert.not.textContains('body', initialText)
            .sendKeys('#tinymce', [browser.Keys.END])
            .sendKeys('#tinymce', [browser.Keys.CONTROL, browser.Keys.SHIFT, browser.Keys.ARROW_UP])
            .sendKeys('#tinymce', [browser.Keys.DELETE])
            .assert.textContains('body', textFirstParagraph)
            .assert.not.textContains('body', textLastParagraph)

    });

});