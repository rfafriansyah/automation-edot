import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3398665",
  username: "itqaedot6860",
  password: "Testing1234!",
};

test.describe("Product", () => {
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
    }
  );

  test("As a user be able to access Product List Table", async ({
    page,
    productSubmenuPage,
  }) => {
    await productSubmenuPage.screenshotListPage();
  });

  test("As a user be able to create Product", async ({
    page,
    productSubmenuPage,
  }) => {
    await productSubmenuPage.clickbuttonAddNew();
    await productSubmenuPage.inputfieldProductName("AT Rhama");
    await productSubmenuPage.inputfieldProductType("All");
    await productSubmenuPage.inputfieldCategory("All");
    await productSubmenuPage.inputfieldProductBrand();
    await productSubmenuPage.inputfieldIndustry();
    await productSubmenuPage.inputfieldExternalCode("123123123");
    await productSubmenuPage.inputfieldCost("12000");
    await productSubmenuPage.inputfieldBasePrice("36000");
    await productSubmenuPage.inputfieldBaseUom("pcs");
    await productSubmenuPage.inputfieldLevel1("Kecil");
    await productSubmenuPage.clickbuttonAddNewLevel();
    await productSubmenuPage.inputfieldLevel2("Sedang");
    await productSubmenuPage.inputfieldUomLevel2("Ctn");
    await productSubmenuPage.inputfieldConvertionLevel2("12");
    await productSubmenuPage.clickbuttonAddNewLevel();
    await productSubmenuPage.inputfieldLevel3("Besar");
    await productSubmenuPage.inputfieldUomLevel3("Pac");
    await productSubmenuPage.inputfieldConvertionLevel3("24");

    await productSubmenuPage.clicktabAttributeVariant();
    await productSubmenuPage.clickbuttonAddNewAttribute();
    await productSubmenuPage.inputfieldAttributeName("Size");
    await productSubmenuPage.inputfieldValueAttributeName("X");
    await productSubmenuPage.inputfieldValueAttributeName("Y");
    await productSubmenuPage.inputfieldValueAttributeName("Z");
    // await productSubmenuPage.screenshotListPage();
    await page.waitForTimeout(3000);
  });
});
