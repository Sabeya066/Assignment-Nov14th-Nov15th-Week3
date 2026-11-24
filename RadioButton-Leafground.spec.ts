
//In this program we are going to automate the interactions with radio buttons in leafground radio page


import {test,expect} from "@playwright/test";

test("Interacting with radio buttons in Leafground application", async({page}) =>{

await page.goto("https://leafground.com/radio.xhtml");

let defaultSelectRadioButton = page.locator("//input[@value='Option3']/following::span/following::label[text()='Safari']");

await expect(defaultSelectRadioButton).toBeChecked();

let favBrowser = page.locator("(//label[text()='Firefox'])[1]");

await favBrowser.check();

await expect(favBrowser).toBeChecked();

let unSelectable = page.locator('label', { hasText: 'Chennai' });

await unSelectable.click();

await expect(unSelectable).toBeVisible();

await expect(unSelectable).toBeEnabled();

let ageGroup = await page.getByRole("radio", {name: "21-40 Years"});

await expect(ageGroup).toBeChecked();

})

