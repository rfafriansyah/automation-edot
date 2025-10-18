import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3398665",
  username: "itqaedot6860",
  password: "Testing1234!",
};

test.describe("Stocks Adjustment", () => {
  test.beforeEach(async ({ page, loginPage, headerComponent }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();

    await headerComponent.clickmoduleInventory();
  });

  test.only("As a user be able to access Stocks Adjustment List Table", async ({
    page,
    stocksAdjustmentSubmenuPage,
  }) => {
    await stocksAdjustmentSubmenuPage.clickstocksAdjustmentSubmenu();
    await stocksAdjustmentSubmenuPage.screenshotListPage();
  });
});
