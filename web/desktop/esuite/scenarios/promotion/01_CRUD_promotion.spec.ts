import { test } from "../../pageObjects/Base.page";
import {
  credentialsProd,
  credentialsStagingExisting,
} from "../../payload/credentials";

const credentials = credentialsProd;

let getText = "";
let placeholder = "";

test.describe.serial("Promotion", () => {
  test.beforeEach(async ({ page, loginPage, headerComponent, salesPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await headerComponent.validateAllModulesVisible();
    await headerComponent.clickmoduleSales();
    await salesPage.clickSubmenuBranch();
  });

  test("As user be able to create Promo", async ({ page }) => {
    getText = await page.getByRole("link", { name: "Branch" }).innerText();
    console.log(getText);

    placeholder = await page.getByTestId("sbSearchInput");
    console.log(`Ini placeholder....`, placeholder);

    await page.pause();
  });
});
