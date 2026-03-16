import { test, expect } from '@playwright/test';

test('Handle Alerts', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });

    await page.locator('#confirmButton').click();

    await expect(page.locator('.text-success'))
        .toHaveText('You selected Cancel');

});