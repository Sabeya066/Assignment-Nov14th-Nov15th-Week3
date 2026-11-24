
//In this program we are going to implement the various wait Strategies

import {test,expect} from "@playwright/test";

test("Implementing various wait strategies in Leafground Wait", async({page}) =>{

await page.goto("https://leafground.com/waits.xhtml");

const visibilityElement = page.locator("(//span[text()='Click'])[1]");
visibilityElement.click();

await expect(page.locator("//span[text()='I am here']")).toBeVisible({timeout:12000});

const invisibleElement = page.locator("(//span[text()='Click'])[2]");
await invisibleElement.click();

await expect.soft(page.locator("//span[text()='I am about to hide']")).toBeHidden({timeout:15000});

const clickableElement = page.locator("//span[text()='Click First Button']");
await clickableElement.click();

await expect(page.locator("//span[text()='Click Second']")).toBeVisible();
await expect(page.locator("//span[text()='Click Second']")).toBeEnabled();

const textChangeElement = page.locator("(//span[text()='Click'])[3]");
await textChangeElement.click();

await expect(page.locator("//span[text()='Did you notice?']")).toContainText("Did you notice?", {timeout:12000});

})