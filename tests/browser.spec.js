const test = require(`@playwright/test`);

test('My First Test', async ({browser}) => {

    const context = await browser.newContext();

    const page1 = await context.newPage();

    await page1.goto("https://google.com");

    

});