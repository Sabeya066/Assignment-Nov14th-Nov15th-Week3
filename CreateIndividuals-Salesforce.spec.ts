
/* In this program we are going to create the individuals in Salesforce application
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

    //Clicking on the Arrow of individuals
    await page.locator("[class='slds-context-bar__label-action slds-p-left_none slds-p-right_x-small']").click();

    //Clicking on the New for creating an individual
    await page.locator(".slds-dropdown__item").first().click();

    await page.waitForLoadState("domcontentloaded");

    //Entering the last name in information
    await page.getByPlaceholder("Last Name", { exact: true }).fill("Abdul");

    //Saving the information
    await page.getByTitle("Save", { exact: true }).nth(1).click();

    //Using assertion verifying if the individual got created
    await expect(page.locator("//span[text()='Created.']")).toBeVisible();

    console.log("Individiual created successfully");

})

// O/P: Individiual created successfully