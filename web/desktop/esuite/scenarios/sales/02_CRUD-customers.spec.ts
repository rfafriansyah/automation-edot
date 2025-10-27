import { test } from "../../pageObjects/Base.page";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

const payload = {
  customerName: "Customer Djakarta",
};

test.describe.serial("Branch", () => {
  test.beforeEach(async ({ page, loginPage, headerComponent, salesPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await headerComponent.validateAllModulesVisible();
    await headerComponent.clickmoduleSales();
    await salesPage.clickSubmenuCustomers();
  });

  test.only("As a user be able to Create Customers", async ({
    page,
    customersPage,
  }) => {
    await customersPage.createCustomers(payload);
  });
});
