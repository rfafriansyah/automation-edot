import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class MoveHistorySubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleMoveHistory: Locator;

  readonly moveHistorySubmenu: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleMoveHistory = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.moveHistorySubmenu = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(3)"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickmoveHistorySubmenu() {
    await this.moveHistorySubmenu.click();
  }

  async screenshotListPage() {
    await this.page.waitForTimeout(3000);
    await this.page.setViewportSize({ width: 2100, height: 1550 });
    await expect(this.page).toHaveScreenshot("listMoveHistoryList.png", {
      timeout: 5000,
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleMoveHistory.textContent();
    await expect(actualText).toMatchSnapshot("titleMoveHistory.txt");
  }
}
