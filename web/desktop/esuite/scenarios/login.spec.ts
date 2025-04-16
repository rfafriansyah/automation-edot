import { test } from "../pageObjects/Base.page";

test.describe("Home Page Edot - Positive", () => {
  test("User ke halaman Login Esuitre", async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.goto(loginPage.open());
  });
});
