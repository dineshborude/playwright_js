import { test } from '@playwright/test';

test('Get all links on the page', async ({ page, context }) => {

  await page.goto('https://amazon.com'); // wait for JS to finish rendering

  // Wait until at least one <a> with a real href is attached to the DOM
  await page.locator('a[href]').first().waitFor({ state: 'attached' });

  const allLinksHref = await page.locator('a').evaluateAll((elements) =>
    elements
      .map((el) => el.href)
      .filter((href) => href.startsWith('http'))
  );

  console.log('Total links found:', allLinksHref.length);
  console.log('Links:', allLinksHref);

  // Open first link in a new tab and screenshot
  const firstPage = await context.newPage();
  await firstPage.goto(allLinksHref[0]);
  await firstPage.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('Screenshot saved → screenshot.png');

  await firstPage.close();
  await page.close();
});