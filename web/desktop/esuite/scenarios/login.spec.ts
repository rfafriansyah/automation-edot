import { test } from "../pageObjects/Base.page";

const credentials = {
  companyId: "3399099",
  username: "it.qa",
  password: "it.QA2025",
}

test.describe("Home Page Edot - Positive", () => {
  test("User ke halaman Login Esuitre", async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });
});
