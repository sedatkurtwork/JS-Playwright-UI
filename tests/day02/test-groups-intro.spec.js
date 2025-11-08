import { test } from "@playwright/test";

test.describe("user story", () => {
  test.beforeEach(async () => {
    console.log("Before each test case");
  });

  test.afterEach(async () => {
    console.log("After each test case");
  });

  test("Test Case 1 ", async () => {
    console.log("Test case 1 executed");
  });

  test("Test Case 2 ", async () => {
    console.log("Test case 2 executed");
  });

  test("Test Case 3 ", async () => {
    console.log("Test case 3 executed");
  });

  test("Test Case 4 ", async () => {
    console.log("Test case 4 executed");
  });
});
