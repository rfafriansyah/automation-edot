import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ShipmentSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleShipment: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleShipment = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1800, height: 1500 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listShipment.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleShipment.textContent();
    await expect(actualText).toMatchSnapshot("titleShipment.txt");
  }
}
