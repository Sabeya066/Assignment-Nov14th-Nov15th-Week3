
// Using playwright to logging into the salesforce logging in page

import { test, expect } from "@playwright/test";

test("Logging into the Salesforce application using page fixture", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    await page.waitForLoadState("domcontentloaded");

    //Used different CSS locatorts to locate the web elements

    //1) Used id to locate username- I used # and got an error couldn't locate the element so i have given with attribute name and value
    await page.locator("[name='identifier']").fill("process.env.SF_USER!");

    //2) Used tagname with attribute name and value to locate continue button
    await page.locator("button[type='button']").click();

    //3) Used Attribut name with value to locate the password field
    await page.locator("[aria-label='Username']").fill("process.env.SF_PASS!");

    //4) Used tag name with attribute name and value to locate login
    await page.locator("button[type='button']").nth(1).click();

    await expect(page.locator("#emc")).toBeEditable();
    console.log("We have got textbox for verification page to enter otp")

    //Have not used assertion after logging in since I have used Yuva's credentials
})

 // O/P: We have got textbox for verification page to enter otp
