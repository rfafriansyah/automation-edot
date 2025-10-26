import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  categoryName: "Category 26 Oktober",
  categoryNameEdit: "Category Edit",
};

test.describe.serial("UoM Category", () => {
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
      await inventoryPage.clicksubmenuUoMCategory();
    }
  );

  test.skip("As a user be able to access UoM Category List Table", async ({
    page,
    uomCategorySubmenuPage,
  }) => {
    await uomCategorySubmenuPage.screenshotListPage();
  });

  test("As a user be able to Create UoM Category", async ({
    page,
    uomCategorySubmenuPage,
  }) => {
    await uomCategorySubmenuPage.clickButtonAddNew();
    await uomCategorySubmenuPage.inputFieldName(payload.categoryName);
    await uomCategorySubmenuPage.clickButtonSubmit();
    await uomCategorySubmenuPage.validateToastMessage(
      "Create uom category success"
    );
  });

  test("As a user be able to Edit UoM Category", async ({
    page,
    uomCategorySubmenuPage,
  }) => {
    await uomCategorySubmenuPage.inputFieldSearchbar(payload.categoryName);
    await uomCategorySubmenuPage.clickButtonViewDetail();
    await uomCategorySubmenuPage.inputFieldName(payload.categoryNameEdit);
    await uomCategorySubmenuPage.clickButtonSaveChanges();
    await uomCategorySubmenuPage.validateToastMessage(
      "Update uom category success"
    );
  });

  test("As a user be able to Delete UoM Category", async ({
    page,
    uomCategorySubmenuPage,
  }) => {
    await uomCategorySubmenuPage.inputFieldSearchbar(payload.categoryNameEdit);
    await uomCategorySubmenuPage.deleteUomCategory();
  });
});
