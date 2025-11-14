import { test } from "@playwright/test";

test("SEP Practice @sep", async ({ page }) => {
  // 0. login to the app
  CommonUI.loginToSEP(page);
  await page.waitForTimeout(1000);

  // 1. Start Application Step:
  CommonUI.completeStartApplicationStep(
    page,
    "Haci",
    "Hacioglu",
    "haci@oglu.com",
    "55554432"
  );
  await page.waitForTimeout(2000);

  // 2. Payment Plan Step:
  CommonUI.completePaymentPlanStep(page, "upfront");
  await page.waitForTimeout(6000);

  // 3. submit payment plan
  CommonUI.completeSubmitPaymentStep(page, "424242424242", "10/30", "123", "15616");
  await page.waitForTimeout(10000);
});

class CommonUI {
  static async loginToSEP(page) {
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
  }

  static async completeStartApplicationStep(
    page,
    firstName,
    lastName,
    email,
    phone
  ) {
    let firstNameInput = page.locator("#mat-input-0");
    await firstNameInput.fill(firstName);

    let lastNameInput = page.locator("#mat-input-1");
    await lastNameInput.fill(lastName);

    let emailAddressInput = page.locator("#mat-input-2");
    await emailAddressInput.fill(email);

    let phoneNumberInput = page.locator("#mat-input-3");
    await phoneNumberInput.fill(phone);

    let howDidYouDropdown = page.getByText("How did you hear");
    await howDidYouDropdown.click();

    await page.click(`//span[text()='Email']`);

    let nextButton = page.locator("//button[@type='submit']");
    await nextButton.click();
  }

  static async completePaymentPlanStep(page, paymentPlan) {
    paymentPlan = paymentPlan.toLowerCase();

    switch (paymentPlan) {
      case "upfront":
        let upFrontPlanOption = page.getByText("Upfront", { exact: true });
        await upFrontPlanOption.click();
        break;

      case "installments":
      case "installment":
        let installmentsPlanOption = page.getByText("5 Installments", {
          exact: true,
        });
        await installmentsPlanOption.click();
        break;
    }

    let nextButton2 = page.locator(
      "//button[@class='next-button' and text()='Next']"
    );
    await nextButton2.click();
  }

  static async completeSubmitPaymentStep(page, cardNumber, expirationDate, securityCode, zipCode){
    let paymentFrame = page.frameLocator(
      "//iframe[@title='Secure payment input frame']"
    );
    let cardNumberInput = paymentFrame.locator("#Field-numberInput");
    page.waitForTimeout(1000);
    await cardNumberInput.fill(cardNumber);

    let expirationDateInput = paymentFrame.getByPlaceholder("MM / YY");
    await expirationDateInput.fill(expirationDate);

    let securityCodeInput = paymentFrame.locator("#Field-cvcInput");
    await securityCodeInput.fill(securityCode);

    // let countryDrowpown = paymentFrame.locator("#Field-countryInput");
    // await countryDrowpown.selectOption({ label: "Kazakhstan" });
    // page.waitForTimeout(1000);

    let zipCodeInput = paymentFrame.locator("#Field-postalCodeInput");
    await zipCodeInput.fill(zipCode);

    let termsAndConditionsCheckbox = page.locator("#defaultCheck2");
    await termsAndConditionsCheckbox.check();

    let payButton = page.getByText("Pay", { exact: true });
    await payButton.click();
  }
}
