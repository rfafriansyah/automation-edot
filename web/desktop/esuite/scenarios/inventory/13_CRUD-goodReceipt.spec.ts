import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

test.describe("Good Receipt", () => {
  test.beforeEach(
    async ({ page, loginPage, headerComponent, inventoryPage }) => {
      await loginPage.open();
      await loginPage.filltxtCompanyID(credentials.companyId);
      await loginPage.filltxtEmployeeIDUsername(credentials.username);
      await loginPage.filltxtPassword(credentials.password);
      await loginPage.clickbuttonLogin();
      await headerComponent.validateAllModulesVisible();
      await headerComponent.clickmoduleInventory();
      await inventoryPage.validatWordingSubmenuInventory();
      await inventoryPage.clicksubmenuGoodReceipt();
    }
  );

  test("As a user be able to access Good Receipt List Table", async ({
    page,
    goodReceiptSubmenuPage,
  }) => {
    await goodReceiptSubmenuPage.screenshotListPage();
  });
});
