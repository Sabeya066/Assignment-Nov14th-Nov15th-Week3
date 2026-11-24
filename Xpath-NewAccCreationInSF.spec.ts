
// In this program used only Xpath's and playwright inbuilt locator to automate the SF application for creating a new account

import { expect, test } from "@playwright/test";

test("Using xpaths only for creating new account in SF", async ({ page }) => {

    await page.goto("https://login.salesforce.com/");

    await page.locator("//input[@id='identifier-11']").fill("Sabeya066@gmail.com");

    await page.keyboard.press("Enter");

    await page.locator("//input[@name='password']").fill("Sabeya@salesforce2");

    await page.locator("//button[@type='button']/parent::identitylogin-button").click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator("//input[@id='emc']").click();

    await page.locator("//input[@value='Verify']").click();

    await page.locator("//div[@class='slds-icon-waffle']").click();

    await page.locator("//button[text()='View All']").click();

    let searchBox = await page.locator("//input[@placeholder='Search apps or items...']");
    await searchBox.click();
    await searchBox.fill("Accounts");
    await page.keyboard.press("Enter");

    await page.locator("//a[@data-label='Accounts']").click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator("//a[@title='New']/div").click();

    await page.locator("//div[@part='input-container']/input[@name='Name']").fill("Sabeya066@gmail.com");

    await page.getByRole('combobox', { name: 'Rating' }).click();

    await page.locator("//span[text()='Warm']").click();

    await page.locator("//button[@aria-label='Industry']").click();

    await page.locator("//span[text()='Communications']").click();

    await page.locator("//button[@aria-label='Ownership']").click();

    await page.locator("//span[text()='Public']").click();

    await page.locator("//button[@name='SaveEdit']").click();

    await expect(page.locator("//span[@title='We found no potential duplicates of this Account.']"));

    console.log("New account created successfully");

})

// O/P: New account created successfully
