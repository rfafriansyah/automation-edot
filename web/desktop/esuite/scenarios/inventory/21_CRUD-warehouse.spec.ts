import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  warehouseName: "Warehouse 26 Oktober",
  shortName: "WH26OKT",
  ownerType: "Company",
  branch: "hq",
  warehouseNameEdit: "Warehouse 26 Oktober Edit",
  shortNameEdit: "WH26OKTEDIT",
};

test.describe.serial.only("Warehouse", () => {
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
      await inventoryPage.clicksubmenuWarehouse();
    }
  );

  test.skip("As a user be able to access Warehouse List Table", async ({
    page,
    warehouseSubmenuPage,
  }) => {
    await warehouseSubmenuPage.screenshotListPage();
  });

  test("As a user be able to Create Warehouse", async ({
    page,
    warehouseSubmenuPage,
  }) => {
    await warehouseSubmenuPage.createWarehouse(payload);
  });

  test("As a user be able to Edit Warehouse", async ({
    page,
    warehouseSubmenuPage,
  }) => {
    await warehouseSubmenuPage.inputSearchbar(payload);
    await warehouseSubmenuPage.clickButtonViewDetail();
    await warehouseSubmenuPage.editWarehouse(payload);
  });

  test("As a user be able to Delete Warehouse", async ({
    page,
    warehouseSubmenuPage,
  }) => {
    await warehouseSubmenuPage.inputSearchbar(payload);
    await warehouseSubmenuPage.deleteWarehouse();
  });
});
