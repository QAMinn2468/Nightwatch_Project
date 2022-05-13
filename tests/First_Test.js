module.exports = {
  'test 1'(browser) {
    // navigate to new url:
    browser.url('https://www.designory.com/');
    browser.waitForElementVisible('#nav-toggle');
    // browser.assert.attributeContains(element, attribute, expected, [msg]);
    // browser.assert.valueContains(element, expectedText, [msg]);
  }
}
