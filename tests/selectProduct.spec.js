import {test} from '@playwright/test';

test.only('select product', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('#signInBtn');

    await username.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signInButton.click();

    const phone = await page.locator('.card-title>a').nth(0).allTextContents());


})