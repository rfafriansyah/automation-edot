import { Locator, Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  readonly moduleInventory: Locator;

  // Product
  readonly products: Locator;
  readonly productVariant: Locator;
  readonly productCombo: Locator;
  readonly productCategory: Locator;
  readonly productBrand: Locator;
  readonly productGroup: Locator;

  // Stock Management
  readonly stocks: Locator;
  readonly stocksAdjustment: Locator;
  readonly movesHistory: Locator;

  // Stock Moves
  readonly goodReceipt: Locator;
  readonly deliveries: Locator;
  readonly internalTransfer: Locator;

  // Configuration
  readonly location: Locator;
  readonly warehouse: Locator;
  readonly uomCategory: Locator;
  readonly unitOfMeasure: Locator;

  constructor(page: Page) {
    this.page = page;

    this.moduleInventory = page.getByRole("link", { name: "Inventory" });

    this.productVariant = page.getByRole("link", { name: "Product Variant" });
    this.productCombo = page.getByRole("link", { name: "Product Combo" });
    this.productCategory = page.getByRole("link", { name: "Product Category" });
    this.productBrand = page.getByRole("link", { name: "Product Brand" });
    this.productGroup = page.getByRole("link", { name: "Product Group" });
    this.stocks = page.getByRole("link", { name: "Stocks", exact: true });
    this.stocksAdjustment = page.getByRole("link", {
      name: "Stocks Adjustment",
    });
    this.movesHistory = page.getByRole("link", { name: "Moves History" });
    this.goodReceipt = page.getByRole("link", { name: "Good Receipt" });
    this.deliveries = page.getByRole("link", { name: "Deliveries" });
    this.internalTransfer = page.getByRole("link", {
      name: "Internal Transfer",
    });
    this.location = page.getByRole("link", { name: "Location" });
    this.warehouse = page.getByRole("link", { name: "Warehouse" });
    this.uomCategory = page.getByRole("link", { name: "UoM Category" });
    this.unitOfMeasure = page.getByRole("link", { name: "Unit of Measure" });
  }

  async clickmoduleInventory() {
    await this.moduleInventory.click();
  }

  // Product
  async clickproducts() {
    await this.products.click();
  }
  async clickproductVariant() {
    await this.productVariant.click();
  }
  async clickproductCombo() {
    await this.productCombo.click();
  }
  async clickproductCategory() {
    await this.productCategory.click();
  }
  async clickproductBrand() {
    await this.productBrand.click();
  }
  async clickproductGroup() {
    await this.productGroup.click();
  }

  // Stock Management
  async clickstocks() {
    await this.stocks.click();
  }
  async clickstocksAdjustment() {
    await this.stocksAdjustment.click();
  }
  async clickmovesHistory() {
    await this.movesHistory.click();
  }

  // Stock Moves
  async clickgoodReceipt() {
    await this.goodReceipt.click();
  }
  async clickdeliveries() {
    await this.deliveries.click();
  }
  async clickinternalTransfer() {
    await this.internalTransfer.click();
  }

  // Configuration
  async clicklocation() {
    await this.location.click();
  }
  async clickwarehouse() {
    await this.warehouse.click();
  }
  async clickuomCategory() {
    await this.uomCategory.click();
  }
  async clickunitOfMeasure() {
    await this.unitOfMeasure.click();
  }

  // Validate be able access
  async validateBeAbleAccess() {
    await expect(
      this.page.getByRole("img", { name: "Branch Restriction" })
    ).not.toBeVisible();
    await expect(
      this.page.getByText(
        "Opps, you do not have permission to access this page"
      )
    ).not.toBeVisible();
    await expect(
      this.page.getByText(
        "You need to log in using an account that has the necessary access, or please contact your administrator for further assistance."
      )
    ).not.toBeVisible();
  }

  // Validate Restriction
  async validateRestriction() {
    await expect(
      this.page.getByRole("img", { name: "Branch Restriction" })
    ).toBeVisible();
    await expect(
      this.page.getByText(
        "Opps, you do not have permission to access this page"
      )
    ).toBeVisible();
    await expect(
      this.page.getByText(
        "You need to log in using an account that has the necessary access, or please contact your administrator for further assistance."
      )
    ).toBeVisible();
  }
}
