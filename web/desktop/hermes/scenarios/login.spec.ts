import { test } from "../pageObjects/Base.page";
import { payloadLogin } from '../../../../helper/payloadHermes'

test.describe.serial("Login Page Hermes - Positive", () => {
  test.beforeEach(async ({ page, loginPage,  }) => {

    await loginPage.open();
    await loginPage.clickbuttonEmailUsername()
  });

  test("User melakukan login menggunakan username", async ({ page, loginPage }) => {

    await loginPage.filltxtEmailUsername(payloadLogin().username)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(payloadLogin().password)
  });

  test("User melakukan login menggunakan email", async ({ page, loginPage }) => {

    await loginPage.filltxtEmailUsername(payloadLogin().email)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(payloadLogin().password)
  });

  test.afterEach(async ({ page, loginPage, navbarPage }) => {
    // Delete Company
    await loginPage.clickbuttonLogin()
    await navbarPage.clickbuttonCompanies()
  });


});
