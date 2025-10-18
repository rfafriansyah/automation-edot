import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3398665",
  username: "itqaedot6860",
  password: "Testing1234!",
};

test.describe("Module Ework", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
  });

  test("Validate Menu Submenu Ework", async ({ page, eworkPage }) => {
    await eworkPage.screenshotListPage();
  });
});
