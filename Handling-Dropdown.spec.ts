/* Printing all the options from dropdown from Leaftaps application and the count of all the
available options
 */


import { test } from "@playwright/test";

test("Printing all the dropdown elements and count", async ({ page }) => {

    await page.goto("https://leaftaps.com/opentaps/control/main");

    //Using different type of locators to locate the web element

    //1) Used Id to locate the webelement of Username
    await page.locator("#username").fill("democsr2");

    //2) Used class to locate the webelement of password and used nth method to find the unique element
    await page.locator(".inputLogin").last().fill("crmsfa");

    //3) Used By Attibute to locate the webelement of login
    await page.locator("input[value='Login']").click();

    //4) Used Visible text to locate the CRMSFA hyperlink
    await page.locator("text=CRM/SFA").click();

    //Added load state so that the dom will be fully loaded before we navigate
    await page.waitForLoadState("domcontentloaded");

    //5) Used Visible text here but it has 13 matches so going with the attribute to locate Leads
    //await page.locator("text=Leads").nth(1).click();
    await page.locator("a[href='/crmsfa/control/leadsMain']").click();

    //Added load state again so that the dom will be fully loaded before we navigate
    await page.waitForLoadState("domcontentloaded");

    //6) Used Visible text and it has seven elements so used attribute
    //await page.locator("text=Create Lead").click();
    await page.locator("a[href='/crmsfa/control/createLeadForm']").click();

    //7) Standard/Native dropdown of select tag is used in industry dropdown- Used id to locate the industry dropdown
    await page.locator("#createLeadForm_industryEnumId").click();

    //8) Used Child combinator to get the total count of Industry dropdown
    let industryDropdown = await page.locator("#createLeadForm_industryEnumId > option");
    let countOfIndustryDropdown = await industryDropdown.count();
    console.log(`The count of industry dropdown is: ${countOfIndustryDropdown}`);

    //9) Used for loop to iterate and print all the elements of industry dropdown
    for (let i = 0; i < countOfIndustryDropdown; i++) {
        let elements = await industryDropdown.nth(i).innerText();
        console.log(`The elements in ${i} th position of industry dropdown are: ${elements}`);
    }

})

/* O/P: The count of industry dropdown is: 17
The elements in 0 th position of industry dropdown are:  
The elements in 1 th position of industry dropdown are: Aerospace
The elements in 2 th position of industry dropdown are: Computer Hardware
The elements in 3 th position of industry dropdown are: Computer Software
The elements in 4 th position of industry dropdown are: Distribution
The elements in 5 th position of industry dropdown are: Finance
The elements in 6 th position of industry dropdown are: General Services
The elements in 7 th position of industry dropdown are: Health Care
The elements in 8 th position of industry dropdown are: Insurance
The elements in 9 th position of industry dropdown are: Manufacturing
The elements in 10 th position of industry dropdown are: Media
The elements in 11 th position of industry dropdown are: Non-profit
The elements in 12 th position of industry dropdown are: Real Estate
The elements in 13 th position of industry dropdown are: Retail
The elements in 14 th position of industry dropdown are: E-tailer
The elements in 15 th position of industry dropdown are: Telecommunications
The elements in 16 th position of industry dropdown are: Press */