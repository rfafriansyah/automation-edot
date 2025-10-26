import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  productBrandName: "Brand 27 Oktober",
  productBrandNameEdit: "Brand 27 Oktober Edit",
};

test.describe.serial("Product Brand", () => {
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
      await inventoryPage.clicksubmenuProductBrand();
    }
  );

  test.skip("As a user be able to access Product Brand List Table", async ({
    page,
    productBrandSubmenuPage,
  }) => {
    await productBrandSubmenuPage.screenshotListPage();
  });

  test("As a user be able to Create Product Brand", async ({
    page,
    productBrandSubmenuPage,
  }) => {
    await productBrandSubmenuPage.createProductBrand(payload);
  });

  test("As a user be able to Edit Product Brand", async ({
    page,
    productBrandSubmenuPage,
  }) => {
    await productBrandSubmenuPage.inputFieldSearchbar(payload.productBrandName);
    await productBrandSubmenuPage.editProductBrand(payload);
  });

  test("As a user be able to Delete Product Brand", async ({
    page,
    productBrandSubmenuPage,
  }) => {
    await productBrandSubmenuPage.inputFieldSearchbar(payload.productBrandName);
    await productBrandSubmenuPage.deleteProductBrand();
  });
});
