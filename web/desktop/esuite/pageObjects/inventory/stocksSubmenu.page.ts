import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class StocksSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleStocks: Locator;

  readonly stocksSubmenu: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleStocks = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.stocksSubmenu = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(1)"
    );
    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickstocksSubmenu() {
    await this.stocksSubmenu.click();
  }

  async screenshotListPage() {
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listStocks.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleStocks.textContent();
    await expect(actualText).toMatchSnapshot("titleStocks.txt");
  }
}
