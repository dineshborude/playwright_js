import { test, expect } from '@playwright/test'

test('Verify All Links', async ({ page }) => {

    const URL = 'https://automationmentors.blogspot.com/';

    async function fetchAllLinks(URL) {

        console.log(`<- - - - Bhai Aur Behno, Lets Scrap: ${URL} - - - ->`)

        await page.goto(URL, { waitUntil: 'networkidle' });

        console.log('<-------------- PAGE IS FULLY LOADED NOW --- STFU and lets scrap now --->')

        const links = await page.$$eval('a[href]', anchorElements =>
            anchorElements.map(element => element.href)
        );

        console.log(`Total Links : ${links.length}`);
        // console.log(links);

        return links;

    }


    async function linkStatus(links) {


        const results = {
            working: [],
            broken: [],
            errors: [] 
        };

        let index = 1; 

        for (let link of links) {

            try {

                const response = await page.goto(link, { waitUntil: 'networkidle', timeout: 6000 });

                const status = response.status();


                if(status >= 400) {
                    // Broken link - 404, 500, etc.
                    results.broken.push({ url: link, status: status });
                    // console.log(`[${status}] ${index}/${links.length} - ${link}`);
                }
                else {
                    // Working link - 200, 201, etc.
                    results.working.push(link);
                    // console.log(`[${status}] ${index}/${links.length} - ${link}`);
                }

            } catch (err) {

                results.errors.push({ url: link, error: err.message });
                // console.log(`⚠️  [ERROR] ${index}/${links.length} - ${link} (${err.message})`);
            }

            index++;

            // await page.waitForTimeout(300);

        }

    
        return results;

    }

    async function printSummary(results) {
        console.log('\n' + '='.repeat(70));
        console.log('📊 SUMMARY');
        console.log('='.repeat(70));
        console.log(`Total Links: ${results.working.length + results.broken.length + results.errors.length}`);
        console.log(`✅ Working: ${results.working.length}`);
        console.log(`❌ Broken: ${results.broken.length}`);
        console.log(`⚠️  Errors: ${results.errors.length}`);
        console.log('='.repeat(70));

        if (results.broken.length > 0) {
            console.log('\n🔴 BROKEN LINKS:');
            results.broken.forEach((item, idx) => {
                console.log(`${idx + 1}. [${item.status}] ${item.url}`);
            });
        }

        if (results.errors.length > 0) {
            console.log('\n⚠️  ERROR LINKS:');
            results.errors.forEach((item, idx) => {
                console.log(`${idx + 1}. ${item.url}`);
                console.log(`   Error: ${item.error}`);
            });
        }
    }

    
    let links = await fetchAllLinks(URL);

    expect(links.length).toBeGreaterThan(0);

    const results = await linkStatus(links);
    
    await printSummary(results);

 
})