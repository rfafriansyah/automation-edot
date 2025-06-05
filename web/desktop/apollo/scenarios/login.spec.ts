import { test } from "../pageObjects/Base.page";
import { credentialsLogin } from "../../../../helper/apollo/credentials";

test.describe.serial("Login Page Hermes - Positive", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.open();
  });

  test("User melakukan login menggunakan username", async ({
    page,
    loginPage,
    homePage,
  }) => {
    await loginPage.clickbuttonEmailUsername();
    await page.waitForTimeout(2000);
  });
});
