import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class WarehouseSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleWarehouse: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleWarehouse = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 2000, height: 1500 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listWarehouse.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleWarehouse.textContent();
    await expect(actualText).toMatchSnapshot("titleWarehouse.txt");
  }

  async createWarehouse(payload: any) {
    await this.page.getByRole("button", { name: "Add New" }).click();
    await this.page
      .getByRole("textbox", { name: "Warehouse Name" })
      .fill(payload.warehouseName);
    await this.page
      .getByRole("textbox", { name: "Short Name" })
      .fill(payload.shortName);
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Owner Type" })
      .click();
    // await this.page.pause();
    await this.page
      .getByRole("option", { name: payload.ownerType, exact: true })
      .click();
    await this.page.getByRole("button", { name: "Add Branch" }).click();
    await this.page
      .getByRole("textbox", { name: "Search Branch" })
      .fill(payload.branch);
    await this.page.getByRole("checkbox", { name: "Select list" }).click();
    await this.page.getByRole("button", { name: "Add" }).click();
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Create warehouse success").isVisible();
  }

  async inputSearchbar(payload: any) {
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(payload.warehouseName);
  }
  async clickButtonViewDetail() {
    await this.page
      .getByRole("button", { name: "View Detail" })
      .first()
      .click();
  }

  async editWarehouse(payload: any) {
    await this.page
      .getByRole("textbox", { name: "Warehouse Name" })
      .fill(payload.warehouseNameEdit);
    await this.page
      .getByRole("textbox", { name: "Short Name" })
      .fill(payload.shortNameEdit);
    await this.page.getByRole("button", { name: "Save Changes" }).click();
    await this.page.getByText("Success edit warehouse").isVisible();
  }

  async deleteWarehouse() {
    await this.page.getByRole("cell", { name: "Select row" }).first().click();
    await this.page.getByRole("button", { name: "Delete" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
  }
}
