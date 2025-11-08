import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await expect(page).toHaveTitle("Practice");
    expect(await page.title()).toBe("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
    await page.getByText("Checkboxes").click();

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");

    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    // --------------------------------------
    let isChecked = await firstCheckbox.isChecked();
    console.log(typeof isChecked);
    expect(isChecked).toBeTruthy();

    expect(await secondCheckbox.isChecked()).toBeTruthy();

    await page.waitForTimeout(3000);
  });

  test("Verify checkboxes are unchecked", async({ page }) => {
    await page.getByText("Checkboxes").click();

    let firstCheckbox = page.locator("#box1");
    let secondCheckbox = page.locator("#box2");

    // await page.waitForTimeout(3000);

    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    // --------------------------------------
    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();

  //  await page.waitForTimeout(3000);

  });
  test("Verify text of the element", async ({ page }) => {
    let header = "Test Automation Practice";

    let headerElement = page.getByText("Test Automation Practice");
    expect(await headerElement.textContent()).toBe(header);
    await expect(headerElement).toHaveText(header);

    let actualText = await headerElement.innerText();
    expect(actualText).toEqual(header);

  });
});
