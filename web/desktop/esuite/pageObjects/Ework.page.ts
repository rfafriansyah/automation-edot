import { Locator, Page, expect } from "@playwright/test";

export class EworkPage {
  readonly page: Page;
  readonly headingEwork: Locator;

  // Menu Dashboard
  readonly menuDashboard: Locator;

  // Menu Aktivitas Salesman
  readonly menuSalesmanActivity: Locator;
  // Target and Achievement
  readonly targetAndAchievement: Locator;
  readonly buttonFilterTargetAchievement: Locator;
  readonly dropdownfilterBranchTargetAchievement: Locator;
  readonly listFilterBranchTargetAchievement: Locator;
  // Target Outlet
  readonly targetOutlet: Locator;
  readonly dropdownFilterTargetOutlet: Locator;
  readonly listFilterBranchTargetOutlet: Locator;
  // Attendance
  readonly attendance: Locator;
  readonly dropdownFilterAttendance: Locator;
  readonly buttonFilterBranchAttendance: Locator;
  readonly listFilterBranchAttendance: Locator;
  // Live Tracking
  readonly liveTracking: Locator;
  readonly dropdownFilterLiveTracking: Locator;
  readonly listFilterBranchLiveTracking: Locator;
  // Salesman Division
  readonly salesmanDivision: Locator;
  // Salesman Visit
  readonly salesmanVisit: Locator;
  readonly dropdownFilterSalesmanVisit: Locator;
  readonly filterBranchSalesmanVisit: Locator;

  // Menu Rencana Panggilan
  readonly menuCallPlan: Locator;
  // Call Plan Pattern
  readonly callPlanPattern: Locator;
  readonly dropdownFilterCallPlanPattern: Locator;
  readonly listFilterBranchCallPlanPattern: Locator;
  // Call Plan List
  readonly callPlanList: Locator;
  readonly dropdownFilterCallPlanList: Locator;
  readonly filterBranchCallPlanList: Locator;
  readonly listFilterBranchCallPlanList: Locator;

  // Menu Aktivitas Pelanggan
  readonly menuCustomerActivity: Locator;
  readonly surveyReport: Locator;
  readonly stockReport: Locator;
  readonly competitorReport: Locator;
  readonly planogramReport: Locator;
  readonly announcement: Locator;

  // Menu Konfigurasi
  readonly menuConfiguration: Locator;
  readonly brandCompetitor: Locator;
  readonly detailMechanism: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headingEwork = page.getByRole("heading", { name: "Ework" });

    // Menu Dashboard
    this.menuDashboard = page.getByRole("button", { name: "Dashboard" });

    // Salesman Activity
    this.menuSalesmanActivity = page.getByRole("button", {
      name: "Salesman Activity",
    });
    // Target and Achievement
    this.targetAndAchievement = page.getByRole("link", {
      name: "Target & Achievement",
    });
    this.buttonFilterTargetAchievement = page.getByRole("button", {
      name: "Filter",
    });
    this.dropdownfilterBranchTargetAchievement = page
      .locator("div")
      .filter({ hasText: /^Branch$/ })
      .locator("div")
      .first();
    this.listFilterBranchTargetAchievement = page.getByTestId("list");
    // Target Outlet
    this.targetOutlet = page.getByRole("link", { name: "Target Outlet" });
    this.dropdownFilterTargetOutlet = page
      .getByRole("main")
      .locator("header")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .nth(1);
    this.listFilterBranchTargetOutlet = page.locator("#list-filters-branch");
    // Attendance
    this.attendance = page.getByRole("link", { name: "Attendance" });
    this.dropdownFilterAttendance = page
      .locator("header")
      .filter({ hasText: "AttendanceToday- /" })
      .getByRole("button")
      .nth(1);
    this.buttonFilterBranchAttendance = page
      .locator("div")
      .filter({ hasText: /^Branch$/ });
    this.listFilterBranchAttendance = page.locator("#list-filters-branch");
    // Live Tracking
    this.liveTracking = page.getByRole("link", { name: "Live Tracking" });
    this.dropdownFilterLiveTracking = page
      .getByRole("button")
      .filter({ hasText: /^$/ });
    this.listFilterBranchLiveTracking = page.locator("#list-filters-branch");
    // Salesman Division
    this.salesmanDivision = page.getByRole("link", {
      name: "Salesman Division",
    });
    // Salesman Visit
    this.salesmanVisit = page.getByRole("link", { name: "Salesman Visit" });
    this.dropdownFilterSalesmanVisit = page
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .nth(1);
    this.filterBranchSalesmanVisit = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Branch" });

    // Menu Rencana Panggilan
    this.menuCallPlan = page.getByRole("button", { name: "Call Plan" });
    // Call Plan Pattern
    this.callPlanPattern = page.getByRole("link", {
      name: "Call Plan Pattern",
    });
    this.dropdownFilterCallPlanPattern = page
      .getByRole("main")
      .locator("header")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .nth(1);
    this.listFilterBranchCallPlanPattern = page.locator("#list-filters-branch");
    // Call Plan List
    this.callPlanList = page.getByRole("link", { name: "Call Plan List" });
    this.dropdownFilterCallPlanList = page
      .getByRole("main")
      .locator("header")
      .getByRole("button")
      .filter({ hasText: /^$/ })
      .nth(1);
    this.filterBranchCallPlanList = page
      .getByLabel("", { exact: true })
      .getByText("Branch");
    this.listFilterBranchCallPlanList = page.locator("#list-filters-branch");

    // Menu Aktivitas Pelanggan
    this.menuCustomerActivity = page.getByRole("button", {
      name: "Customer Activity",
    });
    this.surveyReport = page.getByRole("link", { name: "Survey Report" });
    this.stockReport = page.getByRole("link", { name: "Stock Report" });
    this.competitorReport = page.getByRole("link", {
      name: "Competitor Report",
    });
    this.planogramReport = page.getByRole("link", { name: "Planogram Report" });
    this.announcement = page.getByRole("link", { name: "Announcement" });

    // Menu Konfigurasi
    this.menuConfiguration = page.getByRole("button", {
      name: "Configuration",
    });
    this.brandCompetitor = page.getByRole("link", { name: "Brand Competitor" });
    this.detailMechanism = page.getByRole("link", { name: "Detail Mechanism" });
  }

  async validateEworkPage() {
    await this.page.waitForLoadState("domcontentloaded");
    await expect(this.headingEwork).toBeVisible();
    await expect(this.menuDashboard).toBeVisible();
    await expect(this.menuSalesmanActivity).toBeVisible();
    await expect(this.menuCallPlan).toBeVisible();
    await expect(this.menuCustomerActivity).toBeVisible();
    await expect(this.menuConfiguration).toBeVisible();
  }

  // Menu Aktivitas Salesman
  // Target and Achievement
  async clicktargetAndAchievement() {
    await this.targetAndAchievement.click();
  }
  async clickbuttonFilterTargetAchievement() {
    await this.buttonFilterTargetAchievement.click();
  }
  async clickdropdownfilterBranchTargetAchievement() {
    await this.dropdownfilterBranchTargetAchievement.click();
  }
  async validatelistFilterBranchTargetAchievement() {
    await this.clickbuttonFilterTargetAchievement();
    await this.clickdropdownfilterBranchTargetAchievement();
    await this.listFilterBranchTargetAchievement.waitFor({ state: "visible" });
    await expect(this.listFilterBranchTargetAchievement).toContainText(
      "Headquarter"
    );
    await expect(this.listFilterBranchTargetAchievement).toContainText(
      "Branch AAA"
    );
    await expect(this.listFilterBranchTargetAchievement).toContainText(
      "Branch BBB"
    );
    await expect(this.listFilterBranchTargetAchievement).toContainText(
      "Branch CCC"
    );
    await expect(this.listFilterBranchTargetAchievement).toContainText(
      "Branch DDD"
    );
  }
  // Target Outlet
  async clicktargetOutlet() {
    await this.targetOutlet.click();
  }
  async clickdropdownFilterTargetOutlet() {
    await this.dropdownFilterTargetOutlet.click();
  }
  async validatelistFilterBranchTargetOutlet() {
    this.clickdropdownFilterTargetOutlet();
    await expect(this.listFilterBranchTargetOutlet).toContainText(
      "Headquarter"
    );
    await expect(this.listFilterBranchTargetOutlet).toContainText("Branch AAA");
    await expect(this.listFilterBranchTargetOutlet).toContainText("Branch BBB");
    await expect(this.listFilterBranchTargetOutlet).toContainText("Branch CCC");
    await expect(this.listFilterBranchTargetOutlet).toContainText("Branch DDD");
  }
  // Attendannce
  async clickattendance() {
    await this.attendance.click();
  }
  async clickdropdownFilterAttendance() {
    await this.dropdownFilterAttendance.click();
  }
  async clickbuttonFilterBranchAttendance() {
    await this.buttonFilterBranchAttendance.click();
  }
  async validatelistFilterBranchAttendance() {
    await this.clickdropdownFilterAttendance();
    await this.clickbuttonFilterBranchAttendance();
    await expect(this.listFilterBranchAttendance).toContainText("Headquarter");
    await expect(this.listFilterBranchAttendance).toContainText("Branch AAA");
    await expect(this.listFilterBranchAttendance).toContainText("Branch BBB");
    await expect(this.listFilterBranchAttendance).toContainText("Branch CCC");
    await expect(this.listFilterBranchAttendance).toContainText("Branch DDD");
  }
  // Live Tracking
  async clickliveTracking() {
    await this.liveTracking.click();
  }
  async clickdropdownFilterLiveTracking() {
    await this.dropdownFilterLiveTracking.click();
  }
  async validatelistFilterBranchLiveTracking() {
    await this.clickdropdownFilterLiveTracking();
    await expect(this.listFilterBranchLiveTracking).toContainText(
      "Headquarter"
    );
    await expect(this.listFilterBranchLiveTracking).toContainText("Branch AAA");
    await expect(this.listFilterBranchLiveTracking).toContainText("Branch BBB");
    await expect(this.listFilterBranchLiveTracking).toContainText("Branch CCC");
    await expect(this.listFilterBranchLiveTracking).toContainText("Branch DDD");
  }
  // Salesman Division
  async clicksalesmanDivision() {
    await this.salesmanDivision.click();
  }
  // Salesman Visit
  async clicksalesmanVisit() {
    await this.salesmanVisit.click();
  }
  async clickdropdownFilterSalesmanVisit() {
    await this.dropdownFilterSalesmanVisit.click();
  }
  async clickfilterBranchSalesmanVisit() {
    await this.filterBranchSalesmanVisit.click();
  }
  async validatelistFilterBranchSalesmanVisit() {
    await this.clickdropdownFilterSalesmanVisit();
    await this.clickfilterBranchSalesmanVisit();
    await expect(this.page.locator("#list-combobox")).toContainText(
      "Headquarter"
    );
    await expect(this.page.locator("#list-combobox")).toContainText(
      "Branch AAA"
    );
    await expect(this.page.locator("#list-combobox")).toContainText(
      "Branch BBB"
    );
    await expect(this.page.locator("#list-combobox")).toContainText(
      "Branch CCC"
    );
    await expect(this.page.locator("#list-combobox")).toContainText(
      "Branch DDD"
    );
  }

  // Menu Rencana Panggilan
  // Call Plan Pattern
  async clickcallPlanPattern() {
    await this.callPlanPattern.click();
  }
  async clickdropdownFilterCallPlanPattern() {
    await this.dropdownFilterCallPlanPattern.click();
  }
  async validatelistFilterBranchCallPlanPattern() {
    await this.clickdropdownFilterCallPlanPattern();
    await expect(this.listFilterBranchCallPlanPattern).toContainText(
      "Headquarter"
    );
    await expect(this.listFilterBranchCallPlanPattern).toContainText(
      "Branch AAA"
    );
    await expect(this.listFilterBranchCallPlanPattern).toContainText(
      "Branch BBB"
    );
    await expect(this.listFilterBranchCallPlanPattern).toContainText(
      "Branch CCC"
    );
    await expect(this.listFilterBranchCallPlanPattern).toContainText(
      "Branch DDD"
    );
  }
  // Call Plan List
  async clickcallPlanList() {
    await this.callPlanList.click();
  }
  async clickdropdownFilterCallPlanList() {
    await this.dropdownFilterCallPlanList.click();
  }
  async clickfilterBranchCallPlanList() {
    await this.filterBranchCallPlanList.click();
  }
  async validatelistFilterBranchCallPlanList() {
    await this.clickdropdownFilterCallPlanList();
    await this.clickfilterBranchCallPlanList();
    await expect(this.listFilterBranchCallPlanList).toContainText(
      "Headquarter"
    );
    await expect(this.listFilterBranchCallPlanList).toContainText("Branch AAA");
    await expect(this.listFilterBranchCallPlanList).toContainText("Branch BBB");
    await expect(this.listFilterBranchCallPlanList).toContainText("Branch CCC");
    await expect(this.listFilterBranchCallPlanList).toContainText("Branch DDD");
  }

  // Customer Activity
  async clicksurveyReport() {
    await this.surveyReport.click();
  }
  async clickstockReport() {
    await this.stockReport.click();
  }
  async clickcompetitorReport() {
    await this.competitorReport.click();
  }
  async clickplanogramReport() {
    await this.planogramReport.click();
  }
  async clickannouncement() {
    await this.announcement.click();
  }

  // Configuration
  async clickbrandCompetitor() {
    await this.brandCompetitor.click();
  }
  async clickdetailMechanism() {
    await this.detailMechanism.click();
  }

  // Validate be able access
  async validateBeAbleAccess() {
    await expect(
      this.page.getByRole("img", { name: "Branch Restriction" })
    ).not.toBeVisible();
    await expect(
      this.page.getByText(
        "Opps, you do not have permission to access this page"
      )
    ).not.toBeVisible();
    await expect(
      this.page.getByText(
        "You need to log in using an account that has the necessary access, or please contact your administrator for further assistance."
      )
    ).not.toBeVisible();
  }

  // Validate Restriction
  async validateRestriction() {
    await expect(
      this.page.getByRole("img", { name: "Branch Restriction" })
    ).toBeVisible();
    await expect(
      this.page.getByText(
        "Opps, you do not have permission to access this page"
      )
    ).toBeVisible();
    await expect(
      this.page.getByText(
        "You need to log in using an account that has the necessary access, or please contact your administrator for further assistance."
      )
    ).toBeVisible();
  }
}
