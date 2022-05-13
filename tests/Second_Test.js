module.exports = {
  'Verify Chicago Webpage'(browser) {
    // navigate to new url:
    browser
      .url('https://www.designory.com/locations/chicago')
      .waitForElementVisible('.location')
      .expect.element('.heading-xl').text.to.contain('CHI')       // H1 class="heading-xl" contains text "CHI"


//      .verify.element('footer').text.to.contain('Chicago')      // Footer contains "Chicago"  (except website does NOT have Chicago here - EXPECT FAIL)
//      .assert.cssProperty('h2', 'fontSize', '40px')             // font-size of H2 where class="heading-2" = 40px   (Font-size=1.75rem - EXPECT FAIL)
//      .expect.element('img').to.have.attribute('src').equals('https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY')

/*

Verify:
div class="side-section spacing-right" next p contains the following text "Phone: +1 312 729 4500"
Anchor tag with class="location":     (nearly the same, pin in street vs pin inside block)
img src = "https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY"

*/


  }
}
