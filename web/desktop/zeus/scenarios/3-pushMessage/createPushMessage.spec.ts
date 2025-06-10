import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import {
  createPushMessage,
  toastMessage,
} from "../../../../../helper/zeus/payload";

test.describe.serial("Create Push Message - Positive", () => {
  test.beforeEach(
    async ({ page, loginPage, homePage, navbarPage, pushMessagePage }) => {
      await page.goto("./");
      await loginPage.clickbuttonEmailUsername();
      await loginPage.filltxtEmailUsername(credentialsLogin().username);
      await loginPage.clickbuttonLogin();
      await loginPage.filltxtPassword(credentialsLogin().password);
      await loginPage.clickbuttonLogin();
      await homePage.validateHomePage();
      await navbarPage.clicksubmenuPushMessage();
      await pushMessagePage.clickbuttonAddNew();
    }
  );

  test("User be able to Create Push Message as Draft", async ({
    page,
    pushMessagePage,
  }) => {
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
    await pushMessagePage.clickbuttonSaveDraft();
  });

  test.only("User be able to Create Push Message as Schedule", async ({
    page,
    pushMessagePage,
    toastComponents,
  }) => {
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
    await pushMessagePage.clickbuttonReviewPublish();
    await pushMessagePage.clickbuttonConfirmPublish();
    await toastComponents.validateToastSuccessCreated(
      toastMessage.successCreated
    );
  });
});
