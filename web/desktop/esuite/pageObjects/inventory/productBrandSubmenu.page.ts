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
    await this.page.waitForTimeout(2000);
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProductBrand.png", {
      maxDiffPixelRatio: 0.001,
      timeout: 5000,
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

  async createProductBrand(payload: any) {
    await this.page.getByRole("button", { name: "Add New" }).click();
    await this.page
      .getByRole("textbox", { name: "Name*" })
      .fill(payload.productBrandName);
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Success add product brand").isVisible();
  }

  async inputFieldSearchbar(payload: any) {
    await this.page.getByRole("textbox", { name: "Search Data" }).click();
    await this.page.getByRole("textbox", { name: "Search Data" }).fill(payload);
    await this.page.waitForTimeout(1000);
  }

  async editProductBrand(payload: any) {
    await this.page
      .getByRole("button", { name: "View Detail" })
      .first()
      .click();
    await this.page
      .getByRole("textbox", { name: "Name*" })
      .fill(payload.productBrandNameEdit);
    await this.page.getByTestId("combobox").click();
    await this.page.getByRole("option", { name: "Nabati" }).click();
    await this.page.getByRole("button", { name: "Save Changes" }).click();
    await this.page.getByText("Success update product brand").isVisible();
  }

  async deleteProductBrand() {
    await this.page
      .getByRole("checkbox", { name: "Select row" })
      .first()
      .click();
    await this.page.getByRole("button", { name: "Delete" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page.getByText("Success delete product").isVisible();
  }
}
