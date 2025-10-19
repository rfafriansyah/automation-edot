import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ProductVariantSubmenuPage {
  readonly page: Page;

  readonly headerComponent: HeaderComponent;

  readonly titleProductVariant: Locator;

  readonly maskingpagination: Locator;
  readonly maskingtableBody: Locator;

  readonly submenuProductVariant: Locator;

  constructor(page: Page) {
    this.page = page;

    this.headerComponent = new HeaderComponent(page);

    this.titleProductVariant = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );

    this.submenuProductVariant = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(2)"
    );
  }

  async clicksubmenuProductVariant() {
    await this.submenuProductVariant.click();
  }

  async screenshotListPage() {
    await this.page.waitForTimeout(3000)
await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProductVariant.png", {
      timeout: 5000,
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleProductVariant.textContent();
    await expect(actualText).toMatchSnapshot("titleProductVariant.txt");
  }
}
