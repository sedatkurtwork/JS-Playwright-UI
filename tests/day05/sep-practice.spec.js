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
});
