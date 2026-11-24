// In this program using xpath to edit the lead of leaptap's application


import { test, expect } from "@playwright/test"

test("Using xpath only to edit the lead of Leaftap's application", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    await page.locator("//input[@id='username']").fill("democsr2");

    await page.locator("//label[@for='password']/following-sibling::input").fill("crmsfa");

    await page.locator("//form[@id='login']//input[@type='submit']").click();

    await page.locator("//div[@for='crmsfa']/a").click();

    await page.locator("//a[@href='/crmsfa/control/leadsMain']").click();

    await page.locator("//a[text()='Create Lead']").click();

    await page.locator("//input[@id='createLeadForm_companyName']").fill("TCS");

    await page.locator("(//input[@name='firstName'])[3]").fill("Sabeya");

    await page.locator("//input[@id='createLeadForm_lastName']").fill("A");

    await page.locator("//input[@value='Create Lead']").click();

    await page.waitForLoadState("load");

    await page.waitForLoadState("domcontentloaded");

    await page.locator("//a[text()='Edit']").click();

    await page.waitForLoadState("domcontentloaded");

    let companyName = await page.locator("//input[@id='updateLeadForm_companyName']");
    await companyName.click();
    await companyName.clear();
    await companyName.fill("CTS");

    await page.locator("//input[@value='Update']").click();

    await page.waitForLoadState("domcontentloaded");

    await expect(page.locator("//span[text()='Company Name']/following::span[contains(text(),'CTS')]")).toBeVisible();
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("CTS");

    console.log("The value is updated to CTS successfully")

})

// O/P: The value is updated to CTS successfully
