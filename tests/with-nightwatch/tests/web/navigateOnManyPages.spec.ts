// TODO: test it
import listOfLinks from "../../../listOfLinks";

describe('The-Internet, navigate to pages [S_3]', () => {

    beforeEach(browser => {
        browser
            .navigateTo('/')
            .waitForElementVisible('body')
            .assert.textContains('h1', 'Welcome to the-internet');
    });

    for (const [i, { targetPageTitlePartialText, linkUrl, linkText }] of listOfLinks.entries()) {
        const testId = 300 + i;
        it(`should navigate to "${linkUrl}" page by clicking on link [T_${testId}]`, async () => {
            browser
                .waitForElementVisible(`a[href="${linkUrl}"]`)
                .assert.textContains(`a[href="${linkUrl}"]`, linkText);
            browser.click(`a[href="${linkUrl}"]`)
                .assert.visible('heading')
                .assert.textContains('heading', targetPageTitlePartialText);
        });

    }

    after(browser => browser.end());

});