
import {test, expect} from '@playwright/test';


test("window pop-up practice", async ({ page })=>{
    // creating event listeners for monitoring window pup-ups
    let promisedNewPageEvent = page.waitForEvent("popup");

    await page.goto("https://practice.cydeo.com/windows");

    await page.click("text='Click Here'"); // triggers the pop-up event
    // await page.waitForTimeout(1000);
    let newPage = await promisedNewPageEvent; // awaiting for the prose to be resolved. 
    await expect(newPage).toHaveTitle("New Window");
    await expect(page).toHaveTitle("Windows");

    await page.bringToFront();

    let firstWindowElement = page.locator("text='Opening a new window'");
    await expect(firstWindowElement).toBeVisible();
    
    // await page.waitForTimeout(1000);
    await newPage.bringToFront();

    let secondWindowElement = newPage.locator("text='New Window'");
    await expect(secondWindowElement).toBeVisible();


    // await page.waitForTimeout(2000);


});