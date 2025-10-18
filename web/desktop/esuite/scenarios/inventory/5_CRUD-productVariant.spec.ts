import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3398665",
  username: "itqaedot6860",
  password: "Testing1234!",
};

test.describe("Product Variant", () => {
  test.beforeEach(async ({ page, loginPage, headerComponent }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();

    await headerComponent.clickmoduleInventory();
  });

  test("As a user be able to access Product Variant List Table", async ({
    page,
    productVariantSubmenuPage,
  }) => {
    await productVariantSubmenuPage.clicksubmenuProductVariant();
    await productVariantSubmenuPage.screenshotListPage();
  });
});
