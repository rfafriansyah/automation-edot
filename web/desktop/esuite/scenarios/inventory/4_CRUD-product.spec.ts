import { test } from "../../pageObjects/Base.page";
import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  productName: "Automation Rhama Fah",
  productType: "All",
  cost: "12000",
  basePrice: "36000",
  category: "All",
  baseUom: "Units",
  level1: "Small",
  level2: "Medium",
  uomLevel2: "Dozens",
  convertionLevel2: "12",
  extraPrice1: "3000",
  extraPrice2: "5000",
  extraPrice3: "7000",
};

let cobaSS: any;

test.describe.serial("Product", () => {
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
    // await productSubmenuPage.validateScreenshotBeforeCreateBasicInfo();
    await productSubmenuPage.inputfieldProductName(payload.productName);
    await productSubmenuPage.inputfieldProductType(payload.productType);
    await productSubmenuPage.inputfieldCategory(payload.category);
    // await productSubmenuPage.inputfieldProductBrand();
    // await productSubmenuPage.inputfieldIndustry();
    // await productSubmenuPage.inputfieldExternalCode("123123123");
    await productSubmenuPage.inputfieldCost(payload.cost);
    await productSubmenuPage.inputfieldBasePrice(payload.basePrice);
    await productSubmenuPage.inputfieldBaseUom(payload.baseUom);
    await productSubmenuPage.inputfieldLevel1(payload.level1);
    await productSubmenuPage.clickbuttonAddNewLevel();
    await productSubmenuPage.inputfieldLevel2(payload.level2);
    await productSubmenuPage.inputFieldUoMLevel2(payload.uomLevel2);
    await productSubmenuPage.inputFieldConvertionLevel2(
      payload.convertionLevel2
    );
    await productSubmenuPage.validateScreenshotAfterFillBasicInfo();

    await productSubmenuPage.clicktabAttributeVariant();
    await productSubmenuPage.validateScreenshotBeforeFillAttributeVariant();
    await productSubmenuPage.clickbuttonAddNewAttribute();
    await productSubmenuPage.inputfieldAttributeName("Size");
    await productSubmenuPage.inputfieldValueAttributeName("X");
    await productSubmenuPage.inputfieldValueAttributeName("Y");
    await productSubmenuPage.inputfieldValueAttributeName("Z");
    await productSubmenuPage.inputExtraPrice(payload);
    // await productSubmenuPage.validateScreenshotAfterFillAttributeVariant();
    await productSubmenuPage.clickbuttonSubmit();
    await productSubmenuPage.validatetoastMessage();
  });

  test("As a user be able to access Product Detail", async ({
    page,
    productSubmenuPage,
  }) => {
    await productSubmenuPage.inputsearchbar(payload.productName);
    const productID = await productSubmenuPage.inputsearchbar(
      payload.productName
    );
    await productSubmenuPage.clickActionViewDetail();
    await productSubmenuPage.validateDetailBasicInfo(payload, productID);
    await productSubmenuPage.clicktabAttributeVariant();
    await productSubmenuPage.validateDetailAttributeVariant();
  });
});
