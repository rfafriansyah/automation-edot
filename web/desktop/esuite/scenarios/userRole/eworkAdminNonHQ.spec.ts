import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3399227",
  username: "3399227_ewkadm3",
  password: "Rhama@123",
};

test.describe("RnP Esuite", () => {
  test.beforeEach(async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Overview Dashboard @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.validateEworkPage();
  });

  // Ework
  // Salesman Activity
  test("Memastikan Esuite Admin HQ dapat mengakses Target & Achievement @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicktargetAndAchievement();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Target Outlet @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicktargetOutlet();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Attendance @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickattendance();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Live Tracking @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickliveTracking();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Salesman Division @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksalesmanDivision();
    await eworkPage.validateRestriction();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Salesman Visit @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksalesmanVisit();
    await eworkPage.validateBeAbleAccess();
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

  // Customer Activity
  test("Memastikan Esuite Admin HQ dapat mengakses Survey Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksurveyReport();
    await eworkPage.validateRestriction();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Stock Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickstockReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Competitor Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcompetitorReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Planogram Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickplanogramReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Annoucement @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickannouncement();
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
