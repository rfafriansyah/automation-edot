import { Locator, Page, expect } from "@playwright/test";

export class MarketingPage {
  readonly page: Page;

  readonly moduleMarketing: Locator;

  // Dashboard
  readonly dashboard: Locator;

  // Promotions
  readonly promotions: Locator;
  readonly promotionSimulation: Locator;

  // Campaign
  readonly campaign: Locator;

  // SKU Focus
  readonly skuRecommendation: Locator;
  readonly productTags;

  // Configuration
  readonly campaignType: Locator;
  readonly promotionType: Locator;
  readonly notification: Locator;
  readonly benefit: Locator;
  readonly benefitType: Locator;

  constructor(page: Page) {
    this.page = page;

    this.moduleMarketing = page.getByRole("link", { name: "Marketing" });

    this.dashboard = page.getByRole("link", { name: "Dashboard" });
    this.promotions = page.getByRole("link", { name: "Promotions" });
    this.promotionSimulation = page.getByRole("link", {
      name: "Promotion Simulation",
    });
    this.campaign = page.getByRole("link", { name: "Campaign", exact: true });
    this.skuRecommendation = page.getByRole("link", {
      name: "SKU Recommendation",
    });
    this.productTags = page.getByRole("link", { name: "Product Tags" });
    this.campaignType = page.getByRole("link", { name: "Campaign Type" });
    this.promotionType = page.getByRole("link", { name: "Promotion Type" });
    this.notification = page.getByRole("link", { name: "Notification" });
    this.benefit = page.getByRole("link", { name: "Benefit", exact: true });
    this.benefitType = page.getByRole("link", { name: "Benefit Type" });
  }

  async clickmoduleMarketing() {
    await this.moduleMarketing.click();
  }

  // Dashboard
  async clickdashboard() {
    await this.dashboard.click();
  }

  // Promotions
  async clickpromotions() {
    await this.promotions.click();
  }
  async clickpromotionSimulation() {
    await this.promotionSimulation.click();
  }

  // Campaign
  async clickcampaign() {
    await this.campaign.click();
  }

  // SKU Focus
  async clickskuRecommendation() {
    await this.skuRecommendation.click();
  }
  async clickproductTags() {
    await this.productTags.click();
  }

  // Configuration
  async clickcampaignType() {
    await this.campaignType.click();
  }
  async clickpromotionType() {
    await this.promotionType.click();
  }
  async clicknotification() {
    await this.notification.click();
  }
  async clickbenefit() {
    await this.benefit.click();
  }
  async clickbenefitType() {
    await this.benefitType.click();
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
