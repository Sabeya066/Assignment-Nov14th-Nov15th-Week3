
//In this program we are going to handle dropdown by interacting with it.

import { test, expect } from "@playwright/test";

test("Interacting with dropdown In Leafground", async ({ page }) => {
    ""
    await page.goto("https://leafground.com/select.xhtml");

    await page.locator("[class='ui-selectonemenu']").selectOption({ label: 'Selenium' });

    await page.locator("[class='ui-selectonemenu']").selectOption({ index: 2 });

    //Getting the count and printing the values of UI Dd
    let favUiDd = await page.locator("[class='ui-selectonemenu']>option");

    let countOffavUiDd = await favUiDd.count();
    console.log(`The count of Fav UI Automation dropdown is: ${countOffavUiDd}`)

    for (let i = 0; i < countOffavUiDd; i++) {
        const element = await favUiDd.nth(i).innerText();
        console.log(`The elements present at ${i} position is: ${element}`);
    }

    await page.locator("//label[text()='Select Country']").click();

    await page.getByRole("option", { name: "India" }).click();

    await page.locator("//label[text()='Select City']").click();

    await page.getByRole("option", { name: "Chennai" }).click();

    await page.locator("[aria-label='Show Options']").click();

    await page.locator("[data-item-value='Playwright']").click();

    await page.locator("[aria-label='Show Options']").click();

    await page.locator("[data-item-value='Selenium WebDriver']").click();

    await page.locator("[aria-label='Show Options']").click();

    await page.locator("[data-item-value='RestAssured']").click();


    let langaugeDd = await page.locator("//label[text()='Select Language']");

    await langaugeDd.click();

    //Getting the innertext of languageDd
    let elementsOflangaugeDd = await page.locator("//li[contains(@id, 'lang')]").allInnerTexts();
    console.log("The elements of language dropdown is:", elementsOflangaugeDd);

    await page.locator("[data-label='English']").click();

    await page.locator("//label[text()='Select Values']").click();

    await page.getByRole("option", { name: "One" }).click();

})

/* O/P: The count of Fav UI Automation dropdown is: 5
The elements present at 0 position is: Select Tool
The elements present at 1 position is: Selenium
The elements present at 2 position is: Playwright
The elements present at 3 position is: Puppeteer
The elements present at 4 position is: Cypress
The elements of language dropdown is: [
  'Select Language',
  'English',
  'Tamil',
  'Telugu',
  'Kannada',
  'Malayalam',
  'Hindi'
] */
