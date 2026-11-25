
/* In this program we are going to edit the individuals in Salesforce application
I have skipped the login by using storage state */

import { test, expect } from "@playwright/test";

test.use({ storageState: "LoginData/SF.json" });
test("Creating individuals-Salesforce application", async ({ page }) => {

    await page.goto("https://orgfarm-9bfd367051-dev-ed.develop.lightning.force.com/lightning/page/home");

    //Click on the App Launcher
    await page.getByTitle("App Launcher", { exact: true }).first().click();

    await page.waitForLoadState("domcontentloaded");

    //Click on the View All Application
    await page.getByLabel("View All Applications", { exact: true }).click();

    //Locate individuals and click on it
    await page.locator("[data-label='Individuals']").click();

    //Search for the individual name
    await page.getByPlaceholder("Search this list...", { exact: true }).fill("Abdul");

    await page.keyboard.press("Enter");

    //Clicking on the small arrow
    await page.locator("[class='slds-button slds-button_icon-border slds-button_icon-x-small']").click()

    //Clicking on the Edit button
    await page.getByTitle("Edit", { exact: true }).first().click();

    //Locating and Clicking on Mr.
    await page.locator("[class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']").click();
    await page.locator("//a[@role='option' and @title='Mr.']").click();

    //Filling First name if first name present clearing and filling it
    const firstName = page.getByPlaceholder("First Name", { exact: true });
    await firstName.clear();
    await firstName.fill("Sabeya");

    //Saving the details
    await page.getByTitle("Save").nth(1).click();

    await page.waitForTimeout(3000);
    
    //Used Assertion to verify the First name
    await expect(page.locator("//a[@href='/lightning/r/0PKak000000VpuHGAS/view']").first()).toContainText("Sabeya");
    console.log("Editing is successful");

})

// O/P: Editing is successful