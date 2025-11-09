import { test, expect } from "@playwright/test";
import { off } from "process";

test.describe("mouse actions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    // await page.waitForTimeout(2000);
  });

  test.afterEach(async ({ page }) => {
    // await page.waitForTimeout(2000);
  });

  test("left click", async ({ page }) => {
    await page.click("text='A/B Testing'");
  });

  test("right click", async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });
  });

  test("hover", async ({ page }) => {
    await page.click("text='Hovers'");

    // await page.hover("(//div[@class='figure'])");

    let elements = await page.locator(".figure").all();
    for (let each of elements) {
      //   await page.waitForTimeout(1000);
      await each.hover();
    }
  });
  test("mouse wheel scrolling", async ({ page }) => {
    await page.mouse.wheel(0, 4000);
  });

  test("scrolling to specific element", async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    // await page.waitForTimeout(1000);
    await inputsLink.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(1000);
    await inputsLink.click();
  });

  test("drag and drop", async ({ page }) => {
    page.click("text='Drag and Drop'");
    // await page.waitForTimeout(1000);
    // await page.dragAndDrop("#column-a", "#column-b");

    let squareA = page.locator("#column-a");
    let squareB = page.locator("#column-b");

    await squareA.dragTo(squareB);
  });
});
