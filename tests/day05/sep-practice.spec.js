import { test } from "@playwright/test";

test("SEP Practice @sep", async ({ page }) => {
  // const USERNAME = "automation-user";
  // const PASSWORD = "123abc";

  const ENCODED_CREDENTIALS = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");
  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${ENCODED_CREDENTIALS}`,
  });

  // await page.goto("https://qa.sep.tdtm.cydeo.com/taws");
  await page.goto(`${process.env.SEP_QA_URL}`);
  await page.waitForTimeout(1000);

  // Start Application Step:
  let firstNameInput = page.locator("#mat-input-0");
  await firstNameInput.fill("Haci");

  let lastNameInput = page.locator("#mat-input-1");
  await lastNameInput.fill("Haciogullarindan");

  let emailAddressInput = page.locator("#mat-input-2");
  await emailAddressInput.fill("hacihaciogullarindan@haci.com");

  let phoneNumberInput = page.locator("#mat-input-3");
  await phoneNumberInput.fill("5555555");

  let howDidYouDropdown = page.getByText("How did you hear");
  await howDidYouDropdown.click();

  await page.click("//span[text()='Email']");

  let nextButton = page.locator("//button[@type='submit']");
  await nextButton.click();

  await page.waitForTimeout(2000);
});
