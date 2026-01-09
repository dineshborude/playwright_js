const test = require(`@playwright/test`);

test('login page validations', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('[type="checkbox"]').check();
    await page.locator('[type="submit"]').click();
    
    

})