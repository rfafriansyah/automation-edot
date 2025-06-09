import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import { createPushMessage } from "../../../../../helper/zeus/payload";

test.describe.serial("Access Message Push Notification - Positive", () => {
  test.beforeEach(async ({ page, loginPage, homePage, navbarPage }) => {
    await page.goto("./");
    await loginPage.clickbuttonEmailUsername();
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
    await homePage.validateHomePage();
    await navbarPage.clicksubmenuPushMessage();
  });

  test("User be able access Push Message List", async ({
    page,
    pushMessagePage,
  }) => {
    await page.waitForTimeout(5000);
  });
});
