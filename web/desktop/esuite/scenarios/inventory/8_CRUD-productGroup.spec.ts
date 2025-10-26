import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  productGroupName: "Product Group 27 Test",
  externalCode: "123123123",
  productGroupNameEdit: "Product Group 27 Oktober Test Edit",
  externalCodeEdit: "99999",
};

test.describe.serial("Product Group", () => {
  test.beforeEach(
    async ({ page, loginPage, headerComponent, inventoryPage }) => {
      await loginPage.open();
      await loginPage.filltxtCompanyID(credentials.companyId);
      await loginPage.filltxtEmployeeIDUsername(credentials.username);
      await loginPage.filltxtPassword(credentials.password);
      await loginPage.clickbuttonLogin();
      await headerComponent.validateAllModulesVisible();
      await headerComponent.clickmoduleInventory();
      // await inventoryPage.validatWordingSubmenuInventory();
      await inventoryPage.clicksubmenuProductGroup();
    }
  );

  test.skip("As a user be able to access Product Group List Table", async ({
    page,
    productGroupSubmenuPage,
  }) => {
    await productGroupSubmenuPage.screenshotListPage();
  });

  test("As a user be able to Create Product Group", async ({
    page,
    productGroupSubmenuPage,
  }) => {
    await productGroupSubmenuPage.createProductGroup(payload);
  });

  test("As a user be able to Edit Product Group", async ({
    page,
    productGroupSubmenuPage,
  }) => {
    await productGroupSubmenuPage.inputSearchbar(payload.productGroupName);
    await productGroupSubmenuPage.editProductGroup(payload);
  });

  test("As a user be able to Delete Product Group", async ({
    page,
    productGroupSubmenuPage,
  }) => {
    await productGroupSubmenuPage.inputSearchbar(payload.productGroupNameEdit);
    await productGroupSubmenuPage.deleteProductGroup();
  });
});
