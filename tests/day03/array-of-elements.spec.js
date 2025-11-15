/*
1. verify that there are eactly 50 link element within the <ul> tag.
2. very that each of the 50 link elements within the <ul> tag is visible & clickable
3. verify that each of the 50 link elements within the <ul> gag has a href attribute
*/

import { test, expect } from "@playwright/test";
import { lchown } from "fs";
import { off } from "process";

test.describe("Array of elements practice", () => {
  // create a beforeEach to navigate to https://practice.cydeo.com/
  let elements;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    await expect(page).toHaveTitle("Practice");
    elements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("verify that there are eactly 50 link element within the <ul> tag.", async ({
    page,
  }) => {
    let expectedArrayValue = 50;

    expect(elements.length).toBe(expectedArrayValue);
    // expect(elements.length).toBeGreaterThanOrEqual(20);
  });

  test("very that each of the 50 link elements within the <ul> tag is visible & clickable", async ({
    page,
  }) => {
    for (let e of elements) {
      await expect(e).toBeVisible();
      // expect(await e.isVisible()).toBeTruthy();

      await expect(e).toBeEnabled();
      // expect(await e.isEnabled()).toBeTruthy();
    }
  });

  test("verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({
    page,
  }) => {
    for (let e of elements) {
      await expect(e).toHaveAttribute("href");
      console.log(await e.getAttribute("href"));
    }
  });
});
