
//In this program we are going to automate the PVR flow

import { test, expect } from "@playwright/test"

test("Automating the PVR checkout flow", async ({ page }) => {

    await page.goto("https://www.pvrcinemas.com/");

    await page.locator("//span[@data-pc-section='input']/span").click();

    await page.locator("//h6[text()='Chennai']").click();

    await page.locator("//span[text()='Cinema']").click();

    await page.locator("//span[text()='Select Cinema']").click();

    await page.locator("//span[text()='INOX Chennai Citi Centre,Dr. R. K. Salai Chennai']").click();

    await page.locator("//li[@aria-label='[object Object]']/span[contains(text(), 'Sun')]").click();

    await page.locator("(//span[text()='APPAKUTTY'])[2]").click();

    await page.locator("//span[text()='12:05 PM']").click();

    await page.getByRole("button", { name: "Submit" }).click();

    await page.getByRole("button", { name: "Accept" }).click();

    await page.locator("//span[@id='CL.Club|G:17']").click();

    await page.locator("//span[@id='CL.Club|G:18']").click();

    await page.locator("//span[@id='CL.Club|G:19']").click();

    await expect(page.locator("//div[@class='seat-number']/p[text()='G19']"));

    console.log("Seat G19 is selected");

    await expect(page.locator("//div[@class='seat-number']/p[text()='G18']"));

    console.log("Seat G18 is selected");

    await expect(page.locator("//div[@class='seat-number']/p[text()='G17']"));

    console.log("Seat G18 is selected");

    let totalTp = await page.locator("//div[@class='ticket-price']/p[text()='551.40']");

    await expect(totalTp).toHaveText('551.40');

    const title = await page.title();

    console.log(`The tile of page is: ${title}`);

    await expect(page).toHaveTitle(/PVR Cinemas/);

    console.log("The title verified");

    await page.getByRole("button", { name: "Proceed" }).click();

})

/* O/P: Seat G19 is selected
Seat G18 is selected
Seat G18 is selected
The tile of page is: PVR Cinemas
The title verified */