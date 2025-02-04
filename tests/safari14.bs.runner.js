import { Builder } from 'selenium-webdriver';
import legacyRayCharles from './legacy-ray_charles.e2e.spec.js';

/* eslint-disable camelcase */

// Input capabilities
const capabilities = {
    'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
        browserVersion: '14.1',
        projectName: 'BStack Project Name: Kiwix JS e2e tests',
        buildName: 'BStack Build Name: Safari 14 on Big Sur',
        local: true,
        localIdentifier: process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
        userName: process.env.BROWSERSTACK_USERNAME,
        accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
        seleniumVersion: '4.10.0'
    },
    browserName: 'Safari'
};

async function loadSafariDriver () {
    const driver = await new Builder()
        // .forBrowser('edge')
        .usingServer('https://hub-cloud.browserstack.com/wd/hub')
        .withCapabilities(capabilities)
        .build();
    return driver;
};

const driver_safari = await loadSafariDriver();

// Maximize the window so that full browser state is visible in the screenshots
await driver_safari.manage().window().maximize();
// Browserstack Safari does not support Service Workers
console.log('Running tests in jQuery mode only for this browser version')
legacyRayCharles.runTests(driver_safari, ['jquery']);
