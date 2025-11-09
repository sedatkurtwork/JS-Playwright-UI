import { test, expect } from "@playwright/test";
import path from 'path';
import fs from 'fs';

test("File downloads", async ({ page }) => {
  // create event listener for download
  let promisedDownloadEvent = page.waitForEvent("download");

  await page.goto("https://practice.cydeo.com/download");
  await page.click("text='PPG.jpg'"); // triggers the download event

  let download = await promisedDownloadEvent;

  let downloadPath = path.join(__dirname, "./downloads", download.suggestedFilename());
  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy();
});

test("File uploads", async ({ page }) => {

  await page.goto("https://practice.cydeo.com/upload");
  let filePath = path.join(__dirname, "./uploads/", "TestUpload.txt");
  // await page.waitForTimeout(2000);
  await page.setInputFiles("#file-upload", filePath);
  // await page.waitForTimeout(2000);
  await page.click("#file-submit");
  // await page.waitForTimeout(2000);

  await expect(page.getByText("File Uploaded!")).toBeVisible();
});
