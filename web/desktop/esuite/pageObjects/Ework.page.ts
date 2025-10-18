import { Locator, Page, expect } from "@playwright/test";

export class EworkPage {
  readonly page: Page;

  readonly wordingLoading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.wordingLoading = page
      .locator("iframe")
      .contentFrame()
      .getByText("Loading…");
  }

  async screenshotListPage() {
    await expect(this.wordingLoading).toBeHidden();
    await this.page.waitForLoadState("networkidle");
    await this.page.setViewportSize({ width: 1600, height: 2800 });
    await expect(this.page).toHaveScreenshot("ovewviewDashboardEwork.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [],
    });
  }
}
