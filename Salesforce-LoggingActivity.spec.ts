
// Using playwright to logging into the salesforce logging in page

import { test } from "@playwright/test";

test("Logging into the Salesforce application using page fixture", async ({ page }) => {

    await page.goto("https://login.salesforce.com/?locale=in");

    await page.waitForLoadState("domcontentloaded");

    //Used different CSS locatorts to locate the web elements

    //1) Used id to locate username- I used # and got an error couldn't locate the element so i have given with attribute name and value
    await page.locator("[id='username']").fill("yuvarani.sekar@testleaf.com");

    //2) Used class with value to locate login button
    await page.locator("[class='button r4 wide primary']").first().click();

    //3) Used id without Attribute name to locate the password field
    await page.locator("#password").fill("TestLeaf@2028");

    //4) Used tag name with attribute name and value to locate login
    await page.locator("input[name='Login']").click();

    //Have not used assertion after logging in since I have used Yuva's credentials
})