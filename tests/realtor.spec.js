import test, { expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText('You logged into a secure area')).toBeVisible();

    await page.close();

});
