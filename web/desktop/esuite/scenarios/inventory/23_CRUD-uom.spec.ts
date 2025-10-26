import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  name: "UoM 26 Oktober Name",
  format: "UoM26Okt",
  category: "Unit",
  ratio: "1",
  roundingPrecision: "1",

  nameEdit: "UoM 26 Oktober Edit",
  formatEdit: "UoM26OktEdit",
  categoryEdit: "Weight",
  ratioEdit: "11000",
  roundingPrecisionEdit: "2222",
};

test.describe.serial("UoM", () => {
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
      await inventoryPage.clicksubmenuUoM();
    }
  );

  test.skip("As a user be able to access UoM List Table", async ({
    page,
    uomSubmenuPage,
  }) => {
    await uomSubmenuPage.screenshotListPage();
  });

  test("As a user be able to Create UoM", async ({ page, uomSubmenuPage }) => {
    await uomSubmenuPage.clickButtonNew();
    await uomSubmenuPage.inputFormAddUoM(payload);
  });

  test("As a user be able to Edit UoM", async ({ page, uomSubmenuPage }) => {
    await uomSubmenuPage.inputSearchbar(payload.name);
    await uomSubmenuPage.clickButtonDetail();
    await uomSubmenuPage.inputFormEditUoM(payload);
  });

  test("As a user be able to Delete UoM", async ({ page, uomSubmenuPage }) => {
    await uomSubmenuPage.inputSearchbar(payload.nameEdit);
    await uomSubmenuPage.deleteUoM();
  });
});
