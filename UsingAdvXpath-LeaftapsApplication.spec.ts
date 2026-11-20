
// Using Advanced xpath's to login to the leaftap's application and perform all the necessary steps


import { test, expect } from "@playwright/test";

test("Using Advanced xpath for logging in Leaftaps application", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    //1)Used parent-child xpath to locate username
    await page.locator("//p[@class='top']/input").fill("democsr2");

    //2)Used GrandParent-GrandChild xpath to locate password field
    await page.locator("(//form[@id='login']//input)[2]").fill("crmsfa");

    //3)Used child-parent xpath to locate the login button
    await page.locator("//input[@value='Login']/parent::p").click();

    //4) Used GrandChild-Grand Parent to locate the CRMSFA link
    await page.locator("(//a[normalize-space()='CRM/SFA']/ancestor::div)[5]").click();

    //Used load state so that the CRMSFA home page loads completely
    await page.waitForLoadState("domcontentloaded");

    // First i have stored the title in a variable to get it then used assertion for verifying it
    let title = await page.title();
    console.log(title);
    // O/P: My Home | opentaps CRM

    await expect(page).toHaveTitle("My Home | opentaps CRM");
    console.log("You are in CRM/SFA home page");

    //Used child-parent here to locate the webelement of leads
    await page.locator("//a[text()='Leads']/parent::div").click();

    //Used Load state so that the DOM content loaded
    await page.waitForLoadState("domcontentloaded");

    //Retrieving URL and title of leads page in a variable and then I used assertion to verify it
    let url = page.url();
    let titleOfLead = await page.title();
    console.log(url);
    console.log(titleOfLead);
    /* O/P: https://leaftaps.com/crmsfa/control/leadsMain
    My Leads | opentaps CRM */

    await expect(page).toHaveURL("https://leaftaps.com/crmsfa/control/leadsMain");
    await expect(page).toHaveTitle("My Leads | opentaps CRM");
    console.log("You are in Leads page");

})

/* O/P: My Home | opentaps CRM
You are in CRM/SFA home page
https://leaftaps.com/crmsfa/control/leadsMain
My Leads | opentaps CRM
You are in Leads page */