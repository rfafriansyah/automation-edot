import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";

test.describe.serial("Access Message Template - Positive", () => {
  test.beforeEach(async ({ page, loginPage, homePage, navbarPage }) => {
    await page.goto("./");
    await loginPage.clickbuttonEmailUsername();
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
    await homePage.validateHomePage();
    await navbarPage.clicksubmenuMessageTemplate();
  });

  test("User be able access Message Template Detail", async ({
    page,
    messageTemplatePage,
  }) => {
    await messageTemplatePage.clickbuttonViewDetailRow1();
    await messageTemplatePage.validateDetailPage();
    await page.waitForTimeout(5000);
  });
});
