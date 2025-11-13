import { test, expect } from "@playwright/test";

test("@env-test environment variables", async ({ page }) => {
  console.log(`username is ${process.env.PRACTICE_USERNAME}`);
  console.log(`password is ${process.env.PRACTICE_PASSWORD}`);
});

test("Bypass authentication by encoding the credentials base64 format", async ({
  page,
}) => {
  let username = process.env.PRACTICE_USERNAME;
  let password = process.env.PRACTICE_PASSWORD;  
  let encodedCredential = Buffer.from("username:password").toString("base64");
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCredential}` });
  await page.goto("https://practice.cydeo.com/basic_auth");
  await page.waitForTimeout(3000);

});
