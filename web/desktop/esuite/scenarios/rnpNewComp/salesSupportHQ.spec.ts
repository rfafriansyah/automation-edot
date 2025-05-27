import { salesSupportHQExisting } from "../../../../../helper/credentials/staging";
import { test } from "../../pageObjects/Base.page";

const companyId = salesSupportHQExisting.companyId;
const username = salesSupportHQExisting.username;
const password = salesSupportHQExisting.password;

test.describe("RnP Esuite", () => {
  test.beforeEach(async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(companyId);
    await loginPage.filltxtEmployeeIDUsername(username);
    await loginPage.filltxtPassword(password);
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
