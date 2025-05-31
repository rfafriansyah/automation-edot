import { credentialsLogin } from "../../../../helper/dashboard/credentials";
import { test } from "../pageObjects/Base.page";

test.describe.serial("Login Dashboard - Positive", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.clickbuttonLoginWithEdot();
  });

  test("User melakukan login menggunakan username", async ({
    page,
    loginPage,
  }) => {
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
  });

  test.afterEach(async ({ page, navbarPage, dashboardPage }) => {
    await navbarPage.validatePage();
    await dashboardPage.validatePage();
  });
});
