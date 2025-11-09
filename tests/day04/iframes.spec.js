import { test, expect } from "@playwright/test";

test("iFrame test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/iframe");
  let myFrame = page.frameLocator("#mce_0_ifr");
  let elementInsideTheFrame = myFrame.locator("#tinymce");

  // await page.waitForTimeout(2000);

  await elementInsideTheFrame.clear();
  // await elementInsideTheFrame.press("Control+A", "delete");

  await elementInsideTheFrame.fill("Hello World!");

  // await page.waitForTimeout(2000);

  await expect(elementInsideTheFrame).toHaveText("Hello World!");
});
