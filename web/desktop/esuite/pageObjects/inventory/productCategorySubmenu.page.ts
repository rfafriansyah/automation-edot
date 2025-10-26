import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ProductCategorySubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleProductCategory: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  readonly productCategorySubmenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleProductCategory = page.locator(
      "main:nth-child(2)>header>div:nth-child(1)>h2"
    );

    this.productCategorySubmenu = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(4)"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async clickproductCategorySubmenu() {
    await this.productCategorySubmenu.click();
  }

  async screenshotListPage() {
    await this.page.waitForLoadState("networkidle");
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProductCategory.png", {
      timeout: 5000,
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleProductCategory.textContent();
    await expect(actualText).toMatchSnapshot("titleProductCategory.txt");
  }

  async createProductCategory(payload: any) {
    await this.page.getByRole("button", { name: "Add New" }).click();
    await this.page
      .getByRole("textbox", { name: "Name*" })
      .fill(payload.productCategoryName);
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Success add product category").click();
  }

  async inputSearchbar(payload: any) {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search Data" }).click();
    await this.page.getByRole("textbox", { name: "Search Data" }).fill(payload);
    await this.page.waitForTimeout(1000);
  }

  async editProductCategory(payload: any) {
    await this.page
      .getByRole("button", { name: "View Detail" })
      .first()
      .click();
    await this.page
      .getByRole("textbox", { name: "Name*" })
      .fill(payload.productCategoryNameEdit);
    await this.page.getByTestId("combobox").click();
    await this.page.getByRole("option", { name: "All" }).click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Income Account" })
      .click();
    await this.page
      .getByRole("option", { name: "11120001 - Bank Suspense" })
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Expense Account" })
      .click();
    await this.page
      .getByRole("option", { name: "- Bank Suspense Account" })
      .click();
    await this.page.getByRole("button", { name: "Save Changes" }).click();
    await this.page.getByText("Success edit product category").click();
  }

  async deleteProductCategory() {
    await this.page
      .getByRole("checkbox", { name: "Select row" })
      .first()
      .click();
    await this.page.getByRole("button", { name: "Delete" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page.getByText("Success delete product").click();
  }
}
