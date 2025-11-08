import { test } from "@playwright/test";
import { waitForDebugger } from "inspector";

test.describe("Practice", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto ("https://practice.cydeo.com");

    });

    test.afterEach(async({ page })=> {
        await page.waitForTimeout (2000);

    });



  test("title of page", async ({ page }) => {
    console.log("title: " + await page.title());

  });

  test("url of page", async ({ page }) => {

    console.log("url: " + page.url());

  });


});
