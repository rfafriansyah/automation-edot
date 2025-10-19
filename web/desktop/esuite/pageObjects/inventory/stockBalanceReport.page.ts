import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class StockBalanceReportSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleStockBalanceReport: Locator;

  readonly stockBalanceReportSubmenu: Locator;

  readonly maskingpagination: Locator;

  readonly buttonSetFilter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleStockBalanceReport = page.locator(
      "main:nth-child(2)>div:nth-child(1)>h2"
    );

    this.stockBalanceReportSubmenu = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(4)"
    );

    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );

    this.buttonSetFilter = page.locator("main>div:nth-child(2)>button");
  }

  async clickstockBalanceReportSubmenu() {
    await this.stockBalanceReportSubmenu.click();
  }

  async screenshotListPage() {
    await this.buttonSetFilter.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listStockBalanceReport.png", {
      timeout: 5000,
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [this.headerComponent.maskingProfileUser, this.maskingpagination],
    });
    const actualText = await this.titleStockBalanceReport.textContent();
    await expect(actualText).toMatchSnapshot("titleStockBalanceReport.txt");
  }
}
