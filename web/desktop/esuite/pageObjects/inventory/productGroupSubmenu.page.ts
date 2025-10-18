import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ProductGroupSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleProductGroup: Locator;

  readonly productGroupSubmenu: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleProductGroup = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.productGroupSubmenu = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(6)"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickproductGroupSubmenu() {
    await this.productGroupSubmenu.click();
  }

  async screenshotListPage() {
    await expect(this.titleProductGroup).toBeVisible();
    await expect(this.maskingtableBody).toBeVisible();
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProductGroup.png", {
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
