const { test } = require('@playwright/test');


test('Launch Browser', async ({browser}) => {

    const page = await browser.newPage();
    await page.goto('https://www.google.com');

    console.log("Browser Launched Successfully");

})