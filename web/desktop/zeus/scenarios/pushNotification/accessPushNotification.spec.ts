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

  test.only("User be able access Push Notification List", async ({
    page,
    pushMessagePage,
  }) => {
    await pushMessagePage.clickbuttonAddNew();
    await pushMessagePage.filltxtPushMessageName(
      createPushMessage.pushMessageName
    );
    await pushMessagePage.selectdropdownUserSegment(
      createPushMessage.userSegments
    );
    await pushMessagePage.selectdropdownPlatform(createPushMessage.platform);
    await pushMessagePage.selectdropdownTemplate(createPushMessage.template);
    await pushMessagePage.filltxtDate(createPushMessage.date);
    await pushMessagePage.filltxtTime(createPushMessage.time);
    await page.pause();
    await page.waitForTimeout(10000);
  });
});
