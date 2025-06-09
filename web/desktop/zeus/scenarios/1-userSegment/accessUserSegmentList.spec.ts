import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";

test.describe.serial("Access User Segment - Positive", () => {
  test.beforeEach(async ({ page, loginPage, homePage, navbarPage }) => {
    await page.goto("./");
    await loginPage.clickbuttonEmailUsername();
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
    await homePage.validateHomePage();
    await navbarPage.clicksubmenuUserSegment();
  });

  test("User be able access User Segment List", async ({ page }) => {
    await page.waitForTimeout(2000);
  });
});
