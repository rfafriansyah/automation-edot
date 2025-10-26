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
    await this.page.waitForLoadState("networkidle");
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1600, height: 1550 });
    await expect(this.page).toHaveScreenshot("listProductGroup.png", {
      timeout: 5000,
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleProductGroup.textContent();
    await expect(actualText).toMatchSnapshot("titleProductGroup.txt");
  }

  async createProductGroup(payload: any) {
    await this.page.getByRole("link", { name: "Add New" }).click();
    // Input Product Group Name
    await this.page
      .getByRole("textbox", { name: "Input Product Group Name" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Input Product Group Name" })
      .fill(payload.productGroupName);
    // Choose Parent
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Parent" })
      .click();
    await this.page.getByRole("option", { name: "All" }).click();
    // Input External Code
    await this.page
      .getByRole("textbox", { name: "Choose External Code" })
      .fill(payload.externalCode);
    // Add Product
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Product ID" })
      .click();
    await this.page.getByRole("option").first().click();
    await this.page.getByRole("button", { name: "Add Product" }).click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Product ID" })
      .click();
    await this.page.getByRole("option").nth(1).click();
    await this.page.getByRole("button", { name: "Add Product" }).click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Product ID" })
      .click();
    await this.page.getByRole("option").nth(2).click();
    // Submit
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Succes create product group").isVisible();
  }

  async inputSearchbar(payload: any) {
    await this.page.getByRole("textbox", { name: "Search Data" }).click();
    await this.page.getByRole("textbox", { name: "Search Data" }).fill(payload);
    await this.page.waitForTimeout(1000);
  }

  async editProductGroup(payload: any) {
    await this.page.getByRole("link", { name: "View Detail" }).first().click();
    // Input Product Group Name
    await this.page
      .getByRole("textbox", { name: "Input Product Group Name" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Input Product Group Name" })
      .fill(payload.productGroupNameEdit);
    // Apply for Product Focus
    await this.page.getByRole("radio", { name: "Yes" }).click();
    // Input External Code
    await this.page
      .getByRole("textbox", { name: "Choose External Code" })
      .fill(payload.externalCodeEdit);
    // Delete Product
    await this.page.getByRole("button").getByText("Delete").nth(2).click();
    await this.page.getByRole("button").getByText("Delete").nth(1).click();
    // Click button save changes
    await this.page.getByRole("button", { name: "Save Changes" }).click();
    await this.page.getByText("Update product group success").isVisible();
  }

  async deleteProductGroup() {
    await this.page
      .getByRole("checkbox", { name: "Select row" })
      .first()
      .click();
    await this.page.getByRole("button", { name: "Delete" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page.getByText("Success delete product group").isVisible();
  }
}
