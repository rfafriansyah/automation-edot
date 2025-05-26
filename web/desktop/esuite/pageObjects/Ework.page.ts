import { Locator, Page, expect } from "@playwright/test";

export class EworkPage {
  readonly page: Page;
  readonly headingEwork: Locator;

  // Menu Dashboard
  readonly menuDashboard: Locator;

  // Menu Aktivitas Salesman
  readonly menuSalesmanActivity: Locator;
  readonly targetAndAchievement: Locator;
  readonly targetOutlet: Locator;
  readonly attendance: Locator;
  readonly liveTracking: Locator;
  readonly salesmanDivision: Locator;
  readonly salesmanVisit: Locator;

  // Menu Rencana Panggilan
  readonly menuCallPlan: Locator;
  readonly callPlanPattern: Locator;
  readonly callPlanList: Locator;

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
    this.targetAndAchievement = page.getByRole("link", {
      name: "Target & Achievement",
    });
    this.targetOutlet = page.getByRole("link", { name: "Target Outlet" });
    this.attendance = page.getByRole("link", { name: "Attendance" });
    this.liveTracking = page.getByRole("link", { name: "Live Tracking" });
    this.salesmanDivision = page.getByRole("link", {
      name: "Salesman Division",
    });
    this.salesmanVisit = page.getByRole("link", { name: "Salesman Visit" });

    // Menu Rencana Panggilan
    this.menuCallPlan = page.getByRole("button", { name: "Call Plan" });
    this.callPlanPattern = page.getByRole("link", {
      name: "Call Plan Pattern",
    });
    this.callPlanList = page.getByRole("link", { name: "Call Plan List" });

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
    await expect(this.headingEwork).toBeVisible();
    await expect(this.menuDashboard).toBeVisible();
    await expect(this.menuSalesmanActivity).toBeVisible();
    await expect(this.menuCallPlan).toBeVisible();
    await expect(this.menuCustomerActivity).toBeVisible();
    await expect(this.menuConfiguration).toBeVisible();
  }

  // Menu Aktivitas Salesman
  async clicktargetAndAchievement() {
    await this.targetAndAchievement.click();
  }
  async clicktargetOutlet() {
    await this.targetOutlet.click();
  }
  async clickattendance() {
    await this.attendance.click();
  }
  async clickliveTracking() {
    await this.liveTracking.click();
  }
  async clicksalesmanDivision() {
    await this.salesmanDivision.click();
  }
  async clicksalesmanVisit() {
    await this.salesmanVisit.click();
  }

  // Menu Rencana Panggilan
  async clickcallPlanPattern() {
    await this.callPlanPattern.click();
  }
  async clickcallPlanList() {
    await this.callPlanList.click();
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
