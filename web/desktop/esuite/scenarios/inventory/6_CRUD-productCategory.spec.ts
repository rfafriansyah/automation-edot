import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  productCategoryName: "Category 27 asdsadsa",
  productCategoryNameEdit: "Category 27 Oktober asdsads",
};

test.describe.serial("Product Category", () => {
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
      await inventoryPage.clicksubmenuProductCategory();
    }
  );

  test.skip("As a user be able to access Product Category List Table", async ({
    page,
    productCategorySubmenuPage,
  }) => {
    await productCategorySubmenuPage.screenshotListPage();
  });

  test("As a user be able to Create Product Category", async ({
    page,
    productCategorySubmenuPage,
  }) => {
    await productCategorySubmenuPage.createProductCategory(payload);
  });

  test("As a user be able to Edit Product Category", async ({
    page,
    productCategorySubmenuPage,
  }) => {
    await productCategorySubmenuPage.inputSearchbar(
      payload.productCategoryName
    );
    await productCategorySubmenuPage.editProductCategory(payload);
  });

  test("As a user be able to Delete Product Category", async ({
    page,
    productCategorySubmenuPage,
  }) => {
    await productCategorySubmenuPage.inputSearchbar(
      payload.productCategoryNameEdit
    );
    await productCategorySubmenuPage.deleteProductCategory();
    await page.pause();
  });
});
