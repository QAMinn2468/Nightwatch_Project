module.exports = {
  'Verify Links Within Hamburger Menu'(browser) {
    // navigate to new url:
    browser
      .url('https://www.designory.com/')
      .waitForElementVisible('#nav-toggle')
      .click('#nav-toggle');
      //.waitForElementVisible('.subnav')
    // browser.assert.attributeContains(element, attribute, expected, [msg]);
    // browser.assert.valueContains(element, expectedText, [msg]);
  }

}
