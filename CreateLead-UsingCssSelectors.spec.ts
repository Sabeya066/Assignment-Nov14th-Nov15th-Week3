
//In this program we are going to create a lead using leaftap's application and only by using Css Selectors

import { test, expect } from "@playwright/test";

test("Create Lead in Leaftap's application", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Used id to locate the username with the help of #idname
    await page.locator("#username").fill("democsr2");

    //Used class locator tho locate the Password field
    await page.locator(".inputLogin").nth(1).fill("crmsfa");

    //Used By tagname to locate the login button
    await page.locator("input[type='submit']").click();

    //Used the visible text to locate the CRM/SFA link
    await page.locator("text=CRM/SFA").click();

    //Used Attribute selector to locate the leads
    await page.locator("[href='/crmsfa/control/leadsMain']").click();

    //Used By tagname to locate the Create Lead
    await page.locator("a[href='/crmsfa/control/createLeadForm']").click();

    //Used load state before filling the details
    await page.waitForLoadState("domcontentloaded");

    //Used assertion to check if its a proper landing page
    await expect(page).toHaveURL(/createLeadForm/);

    //Used Attribute selector with nth method to locate the company name
    await page.locator("[name='companyName']").nth(1).fill("TCS");

    //Used id to locate the forename
    await page.locator("#createLeadForm_firstName").fill("Sabeya");

    //Used ID locate the First name
    await page.locator("#createLeadForm_firstNameLocal").fill("Sabeya");

    //Used id to locate the surname
    await page.locator("#createLeadForm_lastName").fill("A");

    //Used tagname to locate  the last name
    await page.locator("input[name='lastNameLocal']").fill("A");

    //Used id to locate the salutation
    await page.locator("#createLeadForm_personalTitle").fill("Tester");

    //Used Attribute selector for title
    await page.locator("[name='generalProfTitle']").fill("QA");

    //Used id to locate annual revenue
    await page.locator("#createLeadForm_annualRevenue").fill("15Lakhs");

    //Used tagname to locate department name
    await page.locator("[name='departmentName']").fill("IT");

    //Standard or native dropdown select tag used in Source dropdown
    //I have used child combinator to get the total count
    let sourceDropdown = await page.locator("#createLeadForm_dataSourceId > option");

    let countOfSd = await sourceDropdown.count();
    console.log(`The count of source dropdown is: ${countOfSd}`);


    //Iterating to all the options and printing the value of source dropdown
    for (let i = 0; i < countOfSd; i++) {

        let elements = await sourceDropdown.nth(i).innerText();
        console.log(`The elements of source dropdown present at index position ${i} is: ${elements}`);

    }

    //Used id to locate the phone no fieled
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("7448644183");

    //Used tagname to locate the create lead button
    await page.locator("input[value='Create Lead']").click();

    //Used assertion to check if the lead is created
    await expect(page).toHaveURL(/viewLead?/);
    console.log("Lead Successfully created")
})

/* O/P: The count of source dropdown is: 13
The elements of source dropdown present at index position 0 is:  
The elements of source dropdown present at index position 1 is: Cold Call
The elements of source dropdown present at index position 2 is: Conference
The elements of source dropdown present at index position 3 is: Direct Mail
The elements of source dropdown present at index position 4 is: Employee
The elements of source dropdown present at index position 5 is: Existing Customer
The elements of source dropdown present at index position 6 is: Other
The elements of source dropdown present at index position 7 is: Partner
The elements of source dropdown present at index position 8 is: Public Relations
The elements of source dropdown present at index position 9 is: Self Generated
The elements of source dropdown present at index position 10 is: Tradeshow
The elements of source dropdown present at index position 11 is: Website
The elements of source dropdown present at index position 12 is: Word of Mouth
Lead Successfully created */