# Nightwatch Project
A place to practice writing tests with Nightwatch.js

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

To Run
* type **npm test** on the git bash command prompt
  
----------------------------------------------------------------------------------------------------

# Test #1 Menu Verification

1. **Go to https://www.designory.com/**
2. **Hamburger Icon is visible**
3. **Click the Hamburger Icon**
4. Verify the menu contains the following six (6) options: 
* i. Work
* ii. About
* iii. Careers
* iv. Locations
* v. Contact
* vi. News
5. Verify each link goes to the correct URL:
* Work: https://www.designory.com/work
* About: https://www.designory.com/about
* Careers: https://www.designory.com/careers
* Locations: https://www.designory.com/  *with sublist containing: Long Beach, Chicago, Nashville, Tokyo, London, Hong Kong, Paris, New York, New Jersey, Portland, Philadelphia
* Contact: https://www.designory.com/contact
* News: https://www.designory.com/news

# Test #2 Location Verification

1.	**Go to https://www.designory.com/locations/chicago**
2.	Verify that the Chicago location is present in the footer on and that the following information is correctly displayed: 
* **H1 is "CHI"**
* Phone number  is "Phone: +1 312 729 4500"
* H2 font size is "40px"
* Verify map location is accurate

# For additional information

* https://nightwatchjs.org/   Nightwatch.js website
* https://www.youtube.com/watch?v=Q8jIlG6WXvI   YouTube video - Coding with Dom - End-to-end testing with NightwatchJS #1: Getting started

          
* *Bold Text for completed tests.*


