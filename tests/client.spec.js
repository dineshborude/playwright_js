import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('register and login a user', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client');

    const registerLink = page.locator('.text-reset');
    const mail = faker.internet.email();
    const password = 'Test@12345';
    const mobile = '9' + faker.string.numeric(9);

    await Promise.all([
        page.waitForURL('**/#/auth/register'),
        registerLink.click(),
    ]);

    await page.locator('#firstName').fill(faker.person.firstName());
    await page.locator('#lastName').fill(faker.person.lastName());
    await page.locator('#userEmail').fill(mail);
    await page.locator('#userMobile').fill(mobile);

    await page
        .locator('select[formcontrolname="occupation"]')
        .selectOption({ label: 'Engineer' });

    await page.locator('input[formcontrolname="gender"][value="Male"]').check();
    await page.locator('#userPassword').fill(password);
    await page.locator('#confirmPassword').fill(password);

    await page.locator('input[type="checkbox"][formcontrolname="required"]').check();
    await page.locator('#login').click();

    await expect(page).toHaveURL(/auth/);


    expect(page.getByText('Account Created Successfully'));

    await page.locator('button[routerlink="/auth"]').click();



    // Login with the same creds
    await page.locator('#userEmail').fill(mail);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();

    await page.waitForTimeout(3000);

    // const cards = page.locator('.card-body');
    const titles = page.locator('h5 b');

    const productNames = await titles.allTextContents();
    console.log(productNames);




});
