import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

test.describe.skip("Shipment", () => {
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
      // await inventoryPage.clickshipmentSubmenu();
    }
  );

  test("As a user be able to access Shipment List Table", async ({
    page,
    shipmentSubmenuPage,
  }) => {
    await shipmentSubmenuPage.screenshotListPage();
  });
});
