# Desi
A place to practice writing tests with Selenium

# Set up your environment:

Node.js

if node.js is not installed:
* Go to https://nodejs.org/en/
* Download to desktop
* install node.js
* Python will update if needed.

Nightwatch
* For up to date info: https://nightwatchjs.org/guide/getting-started/installation.html
* On the command line
* $ npm install nightwatch -g --save-dev

Install browser driver (Chrome)
* npm install chromedriver --save-dev

Install Selenium Server
* Check java version: $ java -version
* Install Java if needed: https://www.oracle.com/java/technologies/downloads/
* Install version 4: $ npm install @nightwatch/selenium-server     
* to fix/reduce the number of vulnerabilites in NPM, run: $ npm audit fix  

Clone Repo and set up your working branch
* https://github.com/QAMinn2468/Desi
  
----------------------------------------------------------------------------------------------------

# Test #1 Menu Verification

1. Go to https://www.designory.com/
2. Verify the menu contains the following six (6) options: 
* i. Work
* ii. About
* iii. Careers
* iv. Locations
* v. Contact
* vi. News
3. Verify each link goes to the correct URL:
* Work: https://www.designory.com/work
* About: https://www.designory.com/about
* Careers: https://www.designory.com/careers
* Locations: https://www.designory.com/  *with sublist containing: Long Beach, Chicago, Nashville, Tokyo, London, Hong Kong, Paris, New York, New Jersey, Portland, Philadelphia
* Contact: https://www.designory.com/contact
* News: https://www.designory.com/news

# Test #2 Location Verification

1.	Verify that the Chicago location is present in the footer on https://www.designory.com/locations/chicago and that the following information is correctly displayed: 
* H1 is "CHI"
* Phone number  is "Phone: +1 312 729 4500"
* H2 font size is "40px"
* Map URL is  "https://maps.googleapis.com/maps/api/staticmap?center= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&zoom=16.5&markers= 225 N Michigan Ave, Suite 700 Chicago, IL 60601&size=400x150&key=AIzaSyAkAXQMgbxLGj6ZFqVAAR8JT4-5LaWKfIY"

# For additional information

* https://nightwatchjs.org/   Nightwatch.js website
* https://www.youtube.com/watch?v=Q8jIlG6WXvI   YouTube video - Coding with Dom - End-to-end testing with NightwatchJS #1: Getting started

          



