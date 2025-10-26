import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

test.describe("Module Ework", () => {
  test.beforeEach(async ({ loginPage, headerComponent }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await headerComponent.validateAllModulesVisible();
  });

  test("Validate Menu Submenu Ework", async ({ page, eworkPage }) => {
    await page.waitForTimeout(10000);
    // await eworkPage.screenshotListPage();
  });
});
