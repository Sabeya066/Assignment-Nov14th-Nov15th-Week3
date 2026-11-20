
/* In this program wrote a playwright script for Handling Assertions with different methods
available in it/ This program has both hard and soft assertions in it. */

import { test, expect } from "@playwright/test"

test("Handling both Hard and Soft Assertions", async ({ page }) => {

    await page.goto("https://leafground.com/input.xhtml");

    //Used basic xpath to locate the disabled textbox and stored it in a variable
    let disabledTextbox = page.locator("//input[@id='j_idt88:j_idt93']");

    //Used Hard Asssertion to check if the textbox is disabled
    await expect(disabledTextbox).toBeDisabled();
    console.log("The textbox verified is disabled");

    //Used Basic xpath to locate the name field
    let nameField = page.locator("//input[@placeholder='Babu Manickam']");

    //Used Hard Asssertion to check if the textbox is enabled or available to edit
    await expect(nameField).toBeEditable();
    console.log("The textbox of name field is enabled");

    await nameField.fill("Sabeya");

    //Used GrandParent-Grandchild to locate the Error box
    let errorTextbox = page.locator("//form[@name='j_idt106']//input[@name='j_idt106:thisform:age']");

    //Used Hard Asssertion to check if the textbox is disabled for a editable text box using soft Assertion
    await expect.soft(errorTextbox).toBeDisabled();
    console.log("Used soft Assertion so test continue to execute even if the assertion fails");

    //Used basic xpath to locate the textbox with existing text
    let existingTextTb = page.locator("//input[@value='Can you clear me, please?']");

    //Cleared the existing value
    await existingTextTb.clear();

    //Filled new value here
    await existingTextTb.fill("I filled something new");

    //To get the text filled in the text box
    const filledText = await existingTextTb.inputValue();
    console.log("The text you filled is:", filledText);

})

/* O/P: The textbox verified is disabled
The textbox of name field is enabled
Used soft Assertion so test continue to execute even if the assertion fails
The text you filled is: I filled something new */