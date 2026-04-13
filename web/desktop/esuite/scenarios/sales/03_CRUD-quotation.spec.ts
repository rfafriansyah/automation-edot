import { test } from "../../pageObjects/Base.page";
import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

test.describe.serial("Branch", () => {
  test.beforeEach(async ({ page, loginPage, headerComponent, salesPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await headerComponent.validateAllModulesVisible();
    await headerComponent.clickmoduleSales();
    await salesPage.clickSubmenuQuotation();
  });

  test("As a user be able to access Quotation List", async ({
    quotationPage,
    page,
  }) => {
    await page.pause();
    await quotationPage.screenshotListPage();
    // Validate List Quotation with Screenshot
  });

  test("As a user be able to access Quotation Detail", async ({
    quotationPage,
    page,
  }) => {
    // Validate Detail Quotation with Screenshot
  });

  test.only("As a user be able to create Quotation", async ({
    quotationPage,
    page,
  }) => {
    await page.pause();
    await quotationPage.clikbuttonAddNew();
    // Validate Detail Quotation with Screenshot
  });
});
