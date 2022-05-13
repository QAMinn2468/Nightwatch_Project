module.exports = {
  'Verify Links Within Hamburger Menu'(browser) {

    browser
      .url('https://www.designory.com/')     // navigate to new url
      .waitForElementVisible('#nav-toggle')  // Hamburger icon is visable
      .assert.not.visible('.subnav-toggle')  // location is not visible prior to clicking hamburger menu
      .click('.navicon')                     // Click hamburger icon class='navicon'
// ********************Navigation menu is open**********************************


/*

      verify ul contains the following li:
      <a href="/work">WORK</a>
      WORK = present

      <a href="/about">ABOUT</a>
      ABOUT = present

      <a href="/careers">CAREERS</a>
      CAREERS = present

*/

      .expect.element('.subnav-toggle').to.be.present  //      LOCATIONS = present



/*
      <a href="/contact">CONTACT</a>
      CONTACT = present

      <a href="/news">NEWS</a>
      NEWS = present

      ul contains 6 li = TRUE
// expect.elements('li').count.to.equal(6)

      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
      Verify links open correct URL
      &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//.waitForElementVisible('.subnav')

      Within Div with class="nav-wrapper scroll"
      verify:
      WORK = https://www.designory.com/work
      ABOUT = https://www.designory.com/about
      CAREERS = https://www.designory.com/careers
      LOCATIONS = https://www.designory.com/
      ********************************************************
      *with sublist containing: Long Beach, Chicago, Nashville, Tokyo, London, Hong Kong, Paris, New York, New Jersey, Portland, Philadelphia
      */

//      .assert.textContains('.subnav-toggle', 'LONG BEACH')

/*
      ul class="subnav"
      contains all of the following:
      <a href="/locations/long-beach">LONG BEACH</a>
      <a href="/locations/chicago">CHICAGO</a>
      <a href="/locations/nashville">NASHVILLE</a>
      <a href="/locations/toyko">TOYKO</a>
      <a href="/locations/london">LONDON</a>
      <a href="/locations/hong kong">HONG KONG</a>
      <a href="/locations/paris">PARIS</a>
      <a href="/locations/new york">NEW YORK</a>
      <a href="/locations/new jersey">NEW JERSEY</a>
      <a href="/locations/portland">PORTLAND</a>
      <a href="/locations/philadelphia">PHILADELPHIA</a>

      ********************************************************
      CONTACT = https://www.designory.com/contact
      NEWS = https://www.designory.com/news

      */

  }

}
