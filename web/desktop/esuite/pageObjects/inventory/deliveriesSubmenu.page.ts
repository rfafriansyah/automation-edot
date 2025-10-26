import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class DeliveriesSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleDeliveries: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleDeliveries = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1700, height: 1500 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listDeliveries.png", {
      maxDiffPixelRatio: 0.05,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleDeliveries.textContent();
    await expect(actualText).toMatchSnapshot("titleDeliveries.txt");
  }
}
