# Test assignment
We are looking for Automation Engineers that have the mindset "only the sky is the limit"
and "automation doesn't stop at testing, it's just a beginning!" ;

The purpose of this test assignment is to assess the applicant's automation skills, allowing him/her to show the best they can do and how fast they can learn.
It is an open assignment. There is no the right answer and there is no end goal other than proving yourself. Surprise us!

Make sure that you give detailed comments or descriptions of your tests.
When the assignment is complete, please push your solution to Github(Gitlab) and send us the link.
If you have any questions, please contact us back.

Good luck!

PS. We don't expect you to spend weeks (and sleepless nights) on doing it. Lets see how far you can get in 6-10 hours. We want to see how you approach and solve problems.

And you will find the users to login in users.js.

# ABN AMRO E2E Test Automation Assignment

### Overview
-  Added data-test-id in the source code index.html, using data-test-id ensures that automated tests are robust, maintainable and less prone to breaking due to changes in the UI. 

- I have also added error-handling in index.js to source code, to test a negative/invalid login sceanrio.

- The assignment is written in Playwright TypeScript framework using Page Object Model.

- The tests can be run against different web desktop browser [Chrome, Firefox] and different mobile size devices [Android, iOS]

- The framework also generates a test report and screenshots are generated for every test final step.

- The framework is configured to run on 2 parallel workers and can be changed to any multiple workers.

### General requirements

### Installation of the testing framework

#### **Clone the repository:**

    git clone https://github.com/GuptaMegha/testautomation-web.git

#### **To run project from github repo:**

    cd e2e-tests

#### **Install dependencies.**
    Make sure the nodejs version is above 18.17.1 [npm i node@18.17.1]
    npm install 
    npx playwright install


#### **To run the tests on desktop size device, go to the root of the project and run (headless mode)**

    npm run test

#### **To run the tests on desktop size device, go to the root of the project and run (headed mode)**

    npm run test-head

#### **To run the tests on mobile size device, go to the root of the project and run (headless mode)**

    npm run test-android

#### **To run the tests on mobile size device go to the root of the project and run (headless mode)**

    npm run test-iphone

#### **To run the tests only on Firefox**

    npm run test-firefox

#### **To open Playwright's last HTML report run**

    npx playwright show-report    