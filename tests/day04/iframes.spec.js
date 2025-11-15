import { test, expect } from "@playwright/test";

test("iFrame test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/iframe");
  // let myFrame = page.frameLocator("#mce_0_ifr");
  // let elementInsideTheFrame = myFrame.locator("#tinymce");

  // await page.waitForTimeout(2000);

  const frame = page.frameLocator("#mce_0_ifr");
  const editor = frame.locator("#tinymce");

  // Make the editor editable if needed
  await editor.evaluate((el) => el.setAttribute("contenteditable", "true"));

  await editor.fill("Hello World!");
  await expect(editor).toHaveText("Hello World!");
});
