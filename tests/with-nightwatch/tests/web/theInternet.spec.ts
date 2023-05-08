describe('The-Internet', function() {

  before(browser => browser.navigateTo('https://the-internet.herokuapp.com'));

  it('has a correct title [T_10]', function(browser) {
    browser
      .waitForElementVisible('body') 
      .assert.textContains('h1', 'Welcome to the-internet');
  });

  it('an error message appears if login with invalid username [T_11]', function(browser) {
    browser
      .waitForElementVisible('body')
      .click('a[href="/login"]')
      .setValue('input[name="username"]', 'john')
      .setValue('input[name="password"]', 'password')
      .click('button[type="submit"]')
      .assert.textContains('#flash', 'Your username is invalid!')
      .end();
  });

  after(browser => browser.end());

});
