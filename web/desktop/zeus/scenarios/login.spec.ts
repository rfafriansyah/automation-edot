import { test } from "../pageObjects/Base.page";
import { credentialsLogin } from "../../../../helper/zeus/credentials";

let username = `it.qa`;
let password = `it.QA2025`;

test.describe.serial("Login Page Zeus - Positive", () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto("./");
  });

  test("User melakukan login menggunakan username", async ({
    page,
    loginPage,
    homePage,
  }) => {
    await loginPage.clickbuttonEmailUsername();
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
    await homePage.validateHomePage();
    await page.waitForTimeout(2000);
  });
});
