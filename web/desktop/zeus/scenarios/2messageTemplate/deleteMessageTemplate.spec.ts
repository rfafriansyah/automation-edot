import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import {
  createMessageTemplate,
  toastMessage,
} from "../../../../../helper/zeus/payload";

test.describe.serial("Message Template - Positive", () => {
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

  test("User be able to Delete message template", async ({
    page,
    messageTemplatePage,
    toastComponents,
  }) => {
    // // Create Template Message
    await messageTemplatePage.clickbuttonAddNew();
    await messageTemplatePage.filltxtTemplateName(
      createMessageTemplate.messageName
    );
    await messageTemplatePage.filltxtTitleMessage(
      createMessageTemplate.titleMessage
    );
    await messageTemplatePage.filltxtUrl(createMessageTemplate.url);
    await messageTemplatePage.filltxtMessage(createMessageTemplate.message);
    await messageTemplatePage.clickbuttonSubmit();
    await toastComponents.validateToastSuccessCreated(
      toastMessage.successCreated
    );

    // Delete Template Message
    await messageTemplatePage.checkcheckboxRow1();
    await messageTemplatePage.clickbuttonDelete();
    await messageTemplatePage.clickbuttonConfirm();
    await toastComponents.validateToastSuccessDeleted(
      toastMessage.successDeleted
    );
    await page.waitForTimeout(5000);
  });
});
