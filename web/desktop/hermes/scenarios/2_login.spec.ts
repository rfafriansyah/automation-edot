import { test } from "../pageObjects/Base.page";
import { credentialsLogin } from "../../../../helper/hermes/credentials";

test.describe.serial("Login Page Hermes - Positive", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.clickbuttonEmailUsername();
  });

  test("User melakukan login menggunakan username", async ({
    page,
    loginPage,
  }) => {
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
  });

  test("User melakukan login menggunakan email", async ({
    page,
    loginPage,
  }) => {
    await loginPage.filltxtEmailUsername(credentialsLogin().email);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
  });

  test.afterEach(async ({ page, loginPage, navbarPage }) => {
    // Delete Company
    await loginPage.clickbuttonLogin();
    await navbarPage.clickbuttonCompanies();
  });
});
