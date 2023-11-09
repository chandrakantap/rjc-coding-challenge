import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("RJC Coding Challenge");
});
test("has pay button", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: /Make Payment/i })
  ).toBeVisible();
});
