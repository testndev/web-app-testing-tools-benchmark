describe('The-Internet, login form [S_1]', function () {

    beforeEach(browser => {
        browser
            .navigateTo('/login')
            .waitForElementVisible('body')
            .assert.textContains('h2', 'Login Page');
    });

    it('should accept user with valid credentials [T_10]', function (browser) {
        browser
            .setValue('input[name="username"]', 'tomsmith')
            .setValue('input[name="password"]', 'SuperSecretPassword!')
            .click('button[type="submit"]')
            .assert.textContains('#flash', 'You logged into a secure area!');
    });

    it('should display error message for incorrect username [T_11]', function (browser) {
        browser
            .setValue('input[name="username"]', 'john')
            .setValue('input[name="password"]', 'pa55w0rd')
            .click('button[type="submit"]')
            .assert.textContains('#flash', 'Your username is invalid!');
    });

    it('should display error message for incorrect password [T_12]', function (browser) {
        browser
            .setValue('input[name="username"]', 'tomsmith')
            .setValue('input[name="password"]', 'incorrect_password')
            .click('button[type="submit"]')
            .assert.textContains('#flash', 'Your password is invalid!');
    });

    after(browser => browser.end());

});
