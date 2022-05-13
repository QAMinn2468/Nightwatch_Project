module.exports = {
  'Verify Chicago Webpage'(browser) {
    // navigate to new url:
    browser
      .url('https://www.designory.com/locations/chicago')
      .waitForElementVisible('.location')
    //  .click('#nav-toggle');
    // browser.assert.attributeContains(element, attribute, expected, [msg]);
    // browser.assert.valueContains(element, expectedText, [msg]);
  }
}
