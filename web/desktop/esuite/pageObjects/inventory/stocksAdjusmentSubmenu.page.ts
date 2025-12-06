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
    await this.page.waitForLoadState("networkidle");
    await this.maskingtableBody.waitFor({ state: "visible" });
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

  async createStockVariantX(payload: any) {
    // click add new
    await this.page.getByRole("button", { name: "Add New" }).click();
    // choose product
    await this.page
      .getByRole("combobox")
      .filter({ hasText: /^Choose Product$/ })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(`${payload.product} (X)`);
    await this.page
      .getByRole("option", { name: `${payload.product} (X)` })
      .first()
      .click();
    // chose uom
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Unit (UoM)" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    // fill quantity
    await this.page.getByRole("spinbutton", { name: "Quantity" }).click();
    await this.page
      .getByRole("spinbutton", { name: "Quantity" })
      .fill(payload.quantity);
    // choose warehouse
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Warehouse" })
      .click();
    // await this.page
    //   .getByRole("textbox", { name: "Search Data" })
    //   .fill(payload.warehouse);
    await this.page
      .getByRole("option", { name: payload.warehouse, exact: true })
      .first()
      .click();
    // click submit
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page
      .getByText("Success add stock adjustment")
      .first()
      .isVisible();
  }

  async createStockVariantY(payload: any) {
    // click add new
    await this.page.getByRole("button", { name: "Add New" }).click();
    // choose product
    await this.page
      .getByRole("combobox")
      .filter({ hasText: /^Choose Product$/ })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(`${payload.product} (Y)`);
    await this.page
      .getByRole("option", { name: `${payload.product} (Y)` })
      .first()
      .click();
    // chose uom
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Unit (UoM)" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    // fill quantity
    await this.page.getByRole("spinbutton", { name: "Quantity" }).click();
    await this.page
      .getByRole("spinbutton", { name: "Quantity" })
      .fill(payload.quantity);
    // choose warehouse
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Warehouse" })
      .click();
    // await this.page
    //   .getByRole("textbox", { name: "Search Data" })
    //   .fill(payload.warehouse);
    await this.page
      .getByRole("option", { name: payload.warehouse, exact: true })
      .first()
      .click();
    // click submit
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page
      .getByText("Success add stock adjustment")
      .first()
      .isVisible();
  }

  async createStockVariantZ(payload: any) {
    // click add new
    await this.page.getByRole("button", { name: "Add New" }).click();
    // choose product
    await this.page
      .getByRole("combobox")
      .filter({ hasText: /^Choose Product$/ })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(`${payload.product} (Z)`);
    await this.page
      .getByRole("option", { name: `${payload.product} (Z)` })
      .first()
      .click();
    // chose uom
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Unit (UoM)" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    // fill quantity
    await this.page.getByRole("spinbutton", { name: "Quantity" }).click();
    await this.page
      .getByRole("spinbutton", { name: "Quantity" })
      .fill(payload.quantity);
    // choose warehouse
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Warehouse" })
      .click();
    // await this.page
    //   .getByRole("textbox", { name: "Search Data" })
    //   .fill(payload.warehouse);
    await this.page
      .getByRole("option", { name: payload.warehouse, exact: true })
      .first()
      .click();
    // click submit
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page
      .getByText("Success add stock adjustment")
      .first()
      .isVisible();
  }
}
