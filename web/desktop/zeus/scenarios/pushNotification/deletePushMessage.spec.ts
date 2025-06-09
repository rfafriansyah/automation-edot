import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import {
  createPushMessage,
  toastMessage,
} from "../../../../../helper/zeus/payload";

test.describe.serial("Create Push Message - Positive", () => {
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

  test("User be able to Create Push Message as Draft", async ({
    page,
    pushMessagePage,
    toastComponents,
  }) => {
    // Create Push Message 'DRAFT'
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
    await pushMessagePage.clickbuttonSaveDraft();

    // Delete Push Message
    await pushMessagePage.checkcheckboxRow1();
    await pushMessagePage.clickbuttonDelete();
    await pushMessagePage.clickbuttonConfirm();
    await toastComponents.validateToastSuccessDeleted(
      toastMessage.successDeleted
    );
  });
});
