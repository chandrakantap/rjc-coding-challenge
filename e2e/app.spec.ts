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

test("Should open Payment Modal", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await expect(
    page.getByRole("dialog", { name: /Make Payment/i })
  ).toBeVisible();
});

test("Checkout button should be disabled when form is not filled", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await expect(
    page.getByRole("dialog", { name: /Make Payment/i })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Checkout" })).toBeDisabled();
});

test("Should validate recipient email", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await page.getByPlaceholder("Recipient email address").fill("cpal@");
  await expect(
    page.getByText("Invalid email address", { exact: true })
  ).toBeVisible();
  await page.getByPlaceholder("Recipient email address").fill("");
  await expect(
    page.getByText("Please enter Recipient email address", { exact: true })
  ).toBeVisible();
});

test("Checkout button should be enabled when required input filled", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await page.getByPlaceholder("Recipient email address").fill("cpal@email.com");
  await page.getByLabel("Amount").fill("45.50");
  await expect(page.getByRole("button", { name: "Checkout" })).toBeEnabled();
});

test("Should show proper error message on 400 - Bad Request", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await page
    .getByPlaceholder("Recipient email address")
    .fill("bademail@email.com");
  await page.getByLabel("Amount").fill("45.50");
  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(page.getByText("Bad Request: Invalid request.")).toBeVisible();
});

test("Should show proper error message on 401 - Unauthorize", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await page
    .getByPlaceholder("Recipient email address")
    .fill("unauthorized@email.com");
  await page.getByLabel("Amount").fill("45.50");
  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(page.getByText("Unauthorized: No Permission.")).toBeVisible();
});

test("Should show proper error message on 5xx - Server Error", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await page.getByPlaceholder("Recipient email address").fill("5xx@email.com");
  await page.getByLabel("Amount").fill("45.50");
  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(
    page.getByText(
      "Some error: We are facing some error processing payment now."
    )
  ).toBeVisible();
});

test("Should show proper message on success", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Make Payment/i }).click();
  await page
    .getByPlaceholder("Recipient email address")
    .fill("validemail@email.com");
  await page.getByLabel("Amount").fill("45.50");
  await page.getByRole("button", { name: "Checkout" }).click();
  await expect(page.getByText("Payment done successfully.")).toBeVisible();
});
