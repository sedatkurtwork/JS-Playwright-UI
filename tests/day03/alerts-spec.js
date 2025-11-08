import { test } from "@playwright/test";

test.describe("JS Allerts @testAlerts", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    let javaScriptLink = page.getByText("JavaScript Alerts", { exact: true });
    await javaScriptLink.click();
  });

  test("Regular Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert Message: ${alert.message()}`);
      //   await page.waitForTimeout(1000);
      alert.accept();
    });
    let clickForJSAlertButton = page.getByText("Click for JS Alert", {
      exact: true,
    });
    await clickForJSAlertButton.click();
    // await page.waitForTimeout(1000);
  });

  test("Confirmation Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Alert message: ${alert.message()}`);
      // await page.waitForTimeout(1000);
      await alert.dismiss();
    });
    let clickForJSConfirmButton = page.getByText("Click for JS Confirm", {
      exact: true,
    });
    await clickForJSConfirmButton.click();
    // await page.waitForTimeout(1000);
  });

  test("Prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`prompt message: ${alert.message()}`);
      // await page.waitForTimeout(3000);
      await alert.accept("Hello from Playwright");
    });
    let clickForJSPromptButton = page.getByText("Click for JS Prompt", {
      exact: true,
    });
    await clickForJSPromptButton.click();
    // await page.waitForTimeout(2000);
  });
});
