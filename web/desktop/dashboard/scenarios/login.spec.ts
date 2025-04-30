import { test } from "../pageObjects/Base.page";

let username = `it.qa`
let password = `it.QA2025`

test.describe.serial("Login Dashboard - Positive", () => {
  test.beforeEach(async ({ page, loginPage, }) => {

    await loginPage.open();
    await loginPage.clickbuttonLoginWithEdot()
  });

  test("User melakukan login menggunakan username", async ({ page, loginPage, }) => {

    await loginPage.filltxtEmailUsername(username)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(password)
    await loginPage.clickbuttonLogin()

  });

  test.afterEach(async ({ page, navbarPage, dashboardPage }) => {

    await navbarPage.validatePage()
    await dashboardPage.validatePage()
  });

});
