import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class StocksAdjustmentSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleStocksAdjustment: Locator;

  readonly stocksAdjustmentSubmenu: Locator;

  readonly maskingTooltipFreezeUnfreeze: Locator;
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

    this.maskingTooltipFreezeUnfreeze = page.locator(
      "div>main>section:nth-child(2)>div>div:nth-child(2)>span"
    );
    this.maskingtableBody = page.locator(
      "div>main>section:nth-child(3)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickstocksAdjustmentSubmenu() {
    await this.stocksAdjustmentSubmenu.click();
  }

  async screenshotListPage() {
    await this.page.waitForTimeout(3000);
    await expect(this.titleStocksAdjustment).toBeVisible();
    await this.page.setViewportSize({ width: 2100, height: 1550 });
    await expect(this.page).toHaveScreenshot("listStocksAdjustmentList.png", {
      timeout: 5000,
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.maskingTooltipFreezeUnfreeze,
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleStocksAdjustment.textContent();
    await expect(actualText).toMatchSnapshot("titleStockAdjustment.txt");
  }
}
