import { setDefaultResultOrder } from "dns";
import { test } from "../pageObjects/Base.page";

const credentials = {
  companyId: "3399225",
  username: "regresfico1007",
  password: "Testing@123",
};

test.describe("Home Page Edot - Positive", () => {
  test("User ke halaman Login Esuitre", async ({
    page,
    loginPage,
    eworkPage,
  }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });

  test("Validate Submenu Overview", async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });
});
