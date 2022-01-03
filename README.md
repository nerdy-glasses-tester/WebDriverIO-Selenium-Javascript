# WebDriverIO-Selenium-Javascript

****SETUP WEBDRIVERIO****

npm install -g n

npm install -g npm

node -v

npm -v

nvm --version

npm init

npm install --save-dev @wdio/cli

npm install @wdio/sync

npm install --save-dev chai

npx wdio config

-Where is your automation backend located? On my local machine

-Which framework do you want to use? mocha

-Do you want to use a compiler? No!

-Where are your test specs located? ./test/specs/**/*.js

-Do you want WebdriverIO to autogenerate some test files? Yes

-Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes

-Where are your page objects located? ./test/pageobjects/**/*.js

-Which reporter do you want to use? spec

-Do you want to add a service to your test setup? chromedriver

-What is the base url? http://localhost


Put in wdio.conf.js file
    reporters: ['spec'],
    port: 4444,
    

npm install --save-dev prettier

Create .prettierrc file in root of folder with
{
    "semi": false,
    "singleQuote": true,
    "useTabs": true,
    "tabWidth": 2,
    "arrowParens": "avoid"
}

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register


Create babel.config.js file in root of folder with
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 12,
                },
            },
        ],
    ],
}


Go to wdio.config.js and add
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register']
    },
    

    package.json add this to run tests
      "scripts": {
    "test": "wdio wdio.conf.js"},


****TO RUN TESTS****

npm run test

npm run test -- --spec ./tests/categoryselection.test.js


