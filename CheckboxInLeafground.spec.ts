
// In this program we are going to handle different checkboxes from Leafground application

import { test, expect } from "@playwright/test"

test("Handling checkboxes in Leafground", async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml");

    await page.locator("//span[text()='Basic']").click();

    await page.locator("//span[text()='Ajax']").click();

    await expect(page.locator("//div[@role='alert']")).toBeVisible();

    await page.locator("//label[text()='Java']/preceding-sibling::div").click();

    await page.locator("//div[contains(@id, 'TriState')]").click();

    await expect(page.locator("//span[text()='State has been changed.']")).toBeVisible();

    await page.locator("//div[@class='ui-toggleswitch-slider']").click();

    await expect(page.locator("//span[text()='Checked']")).toBeVisible();

    await expect(page.locator("[aria-label='Disabled']")).toBeDisabled();

    await page.locator("//input[contains(@id, 'multiple_focus')]/parent::div/parent::div").click();

    await page.locator("//li[@data-item-value='Istanbul']//label").click();

    await expect(page.locator("(//label[text()='Istanbul'])[2]")).toBeChecked();

    await page.locator("//li[@data-item-value='Brasilia']//label").click();

    await page.locator("//li[@data-item-value='Paris']//label").click();

    await page.locator("//li[@data-item-value='Rome']//label").click();

    const expectedValues = ["Paris", "Istanbul", "Rome", "Brasilia"];

    const selectedOptions = page.locator('li.ui-selectcheckboxmenu-checked');

    for (let i = 0; i < expectedValues.length; i++) {

        await expect(selectedOptions.nth(i))
            .toContainText(expectedValues[i]);

    }

})
