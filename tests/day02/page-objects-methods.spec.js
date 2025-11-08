import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com");

  //  await page.waitForTimeout(3000);
  let actualTitle = await page.title();
  console.log("actual title: " + actualTitle);
});

test("Getting the current url of the page", async ({ page }) => {
  //test body
  await page.goto("https://practice.cydeo.com/");
  let actualURL = page.url();

  console.log("actual url: " + actualURL);
});

test("setViewPortSiz test", async ({ page }) => {
  await page.goto("http://practice.cydeo.com/");
  // await page.setViewportSize({width: 1920, height: 1080});
  await page.waitForTimeout(2000);
});
