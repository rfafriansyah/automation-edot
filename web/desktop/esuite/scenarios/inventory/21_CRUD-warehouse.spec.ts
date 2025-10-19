import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3398665",
  username: "itqaedot6860",
  password: "Testing1234!",
};

test.describe("Warehouse", () => {
  test.beforeEach(
    async ({ page, loginPage, headerComponent, inventoryPage }) => {
      await loginPage.open();
      await loginPage.filltxtCompanyID(credentials.companyId);
      await loginPage.filltxtEmployeeIDUsername(credentials.username);
      await loginPage.filltxtPassword(credentials.password);
      await loginPage.clickbuttonLogin();
      await headerComponent.validateAllModulesVisible();
      await headerComponent.clickmoduleInventory();
      await inventoryPage.validateMenuSubmenuInventory();
      await inventoryPage.clickwarehouseSubmenu();
    }
  );

  test("As a user be able to access Warehouse List Table", async ({
    page,
    warehouseSubmenuPage,
  }) => {
    await warehouseSubmenuPage.screenshotListPage();
  });
});
