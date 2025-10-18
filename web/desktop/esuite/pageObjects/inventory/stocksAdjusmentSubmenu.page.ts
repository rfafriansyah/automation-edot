import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class StocksAdjustmentSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleStocksAdjustment: Locator;

  readonly stocksAdjustmentSubmenu: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleStocksAdjustment = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.stocksAdjustmentSubmenu = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(2)"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickstocksAdjustmentSubmenu() {
    await this.stocksAdjustmentSubmenu.click();
  }

  async screenshotListPage() {
    await this.page.waitForTimeout(5000);
    await expect(this.titleStocksAdjustment).toBeVisible();
    await expect(this.titleStocksAdjustment).toMatchAriaSnapshot(
      "main-heading.txt"
    );
    await expect(this.maskingtableBody).toBeVisible();
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("stocksAdjustmentList.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
  }
}
