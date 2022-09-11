What is Cypress?
Fast, easy and reliable testing for anything that runs in a browser.

– Cypress.io
Javascript based E2E testing framework
Allow SE's to help develop and maintain the tests
Runs directly in the browser
Has an IDE, great for debugging and writing tests
Cypress is a test automation tool that runs directly inside the Chrome web browser. Here at Nextiva we are working to leverage Cypress for all projects that can be tested with it.

When should I use Cypress?
First and foremost Cypress is to be used when automating web UI functionality. Cypress should be implemented once the team has test cases written, up to date and validated that they are a part of the end-to-end testing strategy.

What is smoke test?
Smoke testing checks the core functionality of a program, to ensure that the program is ready for further testing. This prevents a QA team from attempting to run a full test of software that can't complete basic functions

Getting Started
These instructions will get you to setup pipedrive project up and running on your local machine for development and testing purposes.

Installing
A step by step series of examples that tell you how to get a development env running

Navigate to the folder where your project is located.

Delete package-lock.json and node_modules if present

Run this command in Terminal to install Npm packages.
npm i

How to open tests in cypress runner:
npm run open:tests

How to run tests headless:
run:tests

Write your first test
Now it's time to write our first test. We're going to:

Write our first passing test.
Write our first failing test.
Watch Cypress reload in real time.
As we continue to save our new test file we'll see the browser auto reloading in real time.

Open up your favorite IDE and add the code below to our your_spec.js test file.

describe('My Test Scenario', () => {
    it('My First Test', () => {
        expect(true).to.equal(true);
    });

    it('My Second Test', () => {
        expect(true).to.equal(false);
    });
});
What are describe, it, and expect?
All of these functions come from Bundled Tools that Cypress bakes in.

describe and it come from Mocha
expect comes from Chai
Cypress builds on these popular tools and frameworks that you hopefully already have some familiarity and knowledge of. If not, that's okay too. Refer this Cypress doc for detailed info.

Reporting
Mochawesome:
Combines the test outputs in the mochawesome-report file for a single output file. Sends this report to test rails.