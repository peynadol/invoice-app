import { test, expect } from "@playwright/test";

test("creates a new invoice", async ({ page }) => {
  // Go to your app's new invoice route
  await page.goto("http://localhost:3000/invoices/new");

  // Fill out the biller (sender) address
  await page.getByPlaceholder("Street Address").first().fill("123 Example Street");
  await page.getByPlaceholder("City").first().fill("London");
  await page.getByPlaceholder("Post Code").first().fill("E1 3EZ");
  await page.getByPlaceholder("Country").first().fill("United Kingdom");

  // Fill out client details
  await page.getByPlaceholder("Client's Name").fill("Liam Client");
  await page.getByPlaceholder("Client's Email").fill("liam@example.com");
  await page.getByPlaceholder("Street Address").nth(1).fill("456 Client Road");
  await page.getByPlaceholder("City").nth(1).fill("Manchester");
  await page.getByPlaceholder("Post Code").nth(1).fill("M1 1AB");
  await page.getByPlaceholder("Country").nth(1).fill("United Kingdom");

  // Set date & terms
  await page.locator('input[type="date"]').fill("2025-06-13");
  await page.selectOption("select", { value: "30" });

  // Project description
  await page.getByPlaceholder("Project Description").fill("Website Redesign");

  // Fill out item
  await page.getByPlaceholder("Item Name").fill("Design");
  await page.getByPlaceholder("Qty.").fill("2");
  await page.getByPlaceholder("Price").fill("500");

  // Submit via "Save & Send"
  await page.getByRole("button", { name: "Save & Send" }).click();

  // Confirm success toast or redirect — adjust based on actual app behavior
  await expect(page).toHaveURL(/invoices/); // or wherever you redirect
});
