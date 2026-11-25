
// In this program I'm storing my caches and cookies using Storage state to use in other programs

import { test } from "@playwright/test";

test("Storing Login details using Storage state", async ({ page }) => {

    await page.goto("https://login.salesforce.com");

    await page.getByPlaceholder("Enter your email address...", { exact: true }).fill("process.env.SF_USER!");

    await page.keyboard.press("Enter");

    await page.getByLabel("Password for sabeya066@gmail.com", { exact: true }).fill("process.env.SF_PASS!");

    await page.getByRole("button", { name: "Log In", exact: true }).click();

    await page.locator("//input[@id='emc']").click();

    await page.pause();

    await page.locator("//input[@value='Verify']").click();

    await page.waitForLoadState("domcontentloaded");

    await page.context().storageState({ path: "LoginData/SF.json" });

})