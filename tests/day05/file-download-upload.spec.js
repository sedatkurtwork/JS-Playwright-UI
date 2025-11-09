import { test, expect } from "@playwright/test";
import path from 'path';
import fs from 'fs';

test("File downloads", async ({ page }) => {
  // create event listener for download
  let promisedDownloadEvent = page.waitForEvent("download");

  await page.goto("https://practice.cydeo.com/download");
  await page.click("text='PPG.jpg'"); // triggers the download event

  let download = await promisedDownloadEvent;

  let downloadPath = path.join(__dirname, "./dowloads", download.suggestedFilename());
  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy();
});

test("File uploads", () => {




    
});
