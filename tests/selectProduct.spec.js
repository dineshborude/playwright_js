import {test} from '@playwright/test';

test.only('select product', async({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('#signInBtn');

    await username.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signInButton.click();

    await page.waitForTimeout(10000)
    const phone = await page.locator('.card-title>a').allTextContents();
    console.log(phone)
    const phone2 = await page.locator('.card-title>a').textContent();

    console.log(phone)
    console.log(phone2);



})