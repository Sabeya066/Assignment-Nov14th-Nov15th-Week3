
/* In this program used only the xpaths and playwright inbuilt locators to automate the salesforce application to create lead 
and verify that the lead name is created */

import { expect, test } from "@playwright/test";

test("Using xpaths only for creating Lead in SF", async ({ page }) => {

    await page.goto("https://login.salesforce.com/");

    await page.locator("//input[@id='identifier-11']").fill("process.env.SF_USER!");

    await page.keyboard.press("Enter");

    await page.locator("//input[@name='password']").fill("process.env.SF_PASS!");

    await page.locator("//button[@type='button']/parent::identitylogin-button").click();

    await page.waitForLoadState("domcontentloaded");

    await page.waitForLoadState("load");

    await page.locator("//input[@id='emc']").click();

    await page.locator("//input[@value='Verify']").click();

    await page.locator("//div[@class='slds-r5']").click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator("//button[text()='View All']").click();

    await page.locator("//div[@data-id='02uak00000b6PwZAAU']").click();

    await page.locator("//a[@href='/lightning/o/Lead/home' and (@title='Leads')]").click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator("//button[text()='New']").click();

    await page.locator("//button[contains(@id, 'combobox-button') and (@name='salutation')]").click();

    await page.locator("//span[text()='Mrs.']").click();

    await page.locator("//input[@name='lastName']").fill("A");

    await page.locator("//input[@name='Company']").fill("TCS");

    await page.locator("(//button[text()='Save'])[2]").click();

    await expect(page.getByRole('button', { name: 'Mark Status as Complete' }));

    await expect(page.locator("//span[text()='Mark Status as Complete']")).toHaveCount(1);

    console.log("Lead Created in SF successfully");

})

// O/P: Lead Created in SF successfully
