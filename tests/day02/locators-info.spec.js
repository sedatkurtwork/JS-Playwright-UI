import { test } from "@playwright/test";
import { waitForDebugger } from "inspector";

test("Simple google test", async ({ page }) => {
  await page.goto("https://www.google.com");

  // let searchBox = page.locator("//textarea[@class = 'gLFyf']");
  // let searchBox = page.locator("#APjFqb");
  let searchBox = page.locator("textarea#APjFqb.gLFyf[jsname='yZiJbe']"); // from perplexity

  await page.waitForTimeout(2000);

  searchBox.fill("cydeo");

  await searchBox.isVisible();
  //  await searchBox.type("cydeo");

  await page.waitForTimeout(1000);
  let textAttrabute = await searchBox.inputValue();
  console.log("text attrabute: " + textAttrabute);

  await searchBox.press("Enter");

  await page.waitForTimeout(2000);
});
