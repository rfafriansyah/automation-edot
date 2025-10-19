import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ProductBrandSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleProductBrand: Locator;

  readonly productBrandSubmenu: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleProductBrand = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.productBrandSubmenu = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(5)"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickproductBrandSubmenu() {
    await this.productBrandSubmenu.click();
  }

  async screenshotListPage() {
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProductBrand.png", {
      maxDiffPixelRatio: 0.001,
      timeout: 2000,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleProductBrand.textContent();
    await expect(actualText).toMatchSnapshot("titleProductBrand.txt");
  }
}
