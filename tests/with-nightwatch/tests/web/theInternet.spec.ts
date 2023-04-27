describe('The-Internet', function() {

  before(browser => browser.navigateTo('https://the-internet.herokuapp.com'));

  it('has a correct title', function(browser) {
    browser
      .waitForElementVisible('body') 
      .assert.textContains('h1', 'Welcome to the-internet');
  });

  after(browser => browser.end());
});
