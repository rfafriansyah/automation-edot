import { salesSupportHQExisting } from "../../../../../helper/esuite/credentials";
import { test } from "../../pageObjects/Base.page";

test.describe("RnP Esuite", () => {
  test.beforeEach(async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(salesSupportHQExisting.companyId);
    await loginPage.filltxtEmployeeIDUsername(salesSupportHQExisting.username);
    await loginPage.filltxtPassword(salesSupportHQExisting.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });

  // Call Plan
  test("Memastikan Esuite Admin HQ dapat mengakses Call Plan Pattern @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcallPlanPattern();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Call Plan List @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcallPlanList();
    await eworkPage.validateBeAbleAccess();
  });

  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Brand Competitor @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickbrandCompetitor();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Detail Mechanism @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickdetailMechanism();
    await eworkPage.validateBeAbleAccess();
  });
});
