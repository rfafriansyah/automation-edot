import { Locator, Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  // Menu Product
  readonly submenuProduct: Locator;
  readonly submenuProductVariant: Locator;
  readonly submenuProductCategory: Locator;
  readonly submenuProductBrand: Locator;
  readonly submenuProductGroup: Locator;

  // Menu Stock Management
  readonly submenuStocks: Locator;
  readonly submenuStocksAdjustment: Locator;
  readonly submenuMoveHistory: Locator;

  // Menu Stock Moves
  readonly submenuGoodReceipt: Locator;
  readonly submenuDeliveries: Locator;
  readonly submenuInternalTransfer: Locator;
  readonly submenuBadStock: Locator;

  // Menu Canvassing
  readonly submenuCanvassBooking: Locator;

  // Menu Configuration
  readonly submenuLocation: Locator;
  readonly submenuWarehouse: Locator;
  readonly submenuUoMCategory: Locator;
  readonly submenuUoM: Locator;

  constructor(page: Page) {
    this.page = page;

    // Menu Product
    this.submenuProduct = page.getByRole("link", { name: "Products" });
    this.submenuProductVariant = page.getByRole("link", {
      name: "Product Variant",
    });
    this.submenuProductCategory = page.getByRole("link", {
      name: "Product Category",
    });
    this.submenuProductBrand = page.getByRole("link", {
      name: "Product Brand",
    });
    this.submenuProductGroup = page.getByRole("link", {
      name: "Product Group",
    });

    // Menu Stock Management
    this.submenuStocks = page.getByRole("link", {
      name: "Stocks",
      exact: true,
    });
    this.submenuStocksAdjustment = page.getByRole("link", {
      name: "Stocks Adjustment",
    });
    this.submenuMoveHistory = page.getByRole("link", { name: "Moves History" });

    // Menu Stock Moves
    this.submenuGoodReceipt = page.getByRole("link", { name: "Good Receipt" });
    this.submenuDeliveries = page.getByRole("link", { name: "Deliveries" });
    this.submenuInternalTransfer = page.getByRole("link", {
      name: "Internal Transfer",
    });
    this.submenuBadStock = page.getByRole("link", { name: "Bad Stock" });

    // Menu Canvassing
    this.submenuCanvassBooking = page.getByRole("link", {
      name: "Canvass Booking",
    });

    // Menu Configuration
    this.submenuLocation = page.getByRole("link", { name: "Location" });
    this.submenuWarehouse = page.getByRole("link", { name: "Warehouse" });
    this.submenuUoMCategory = page.getByRole("link", { name: "UoM Category" });
    this.submenuUoM = page.getByRole("link", { name: "Unit of Measure" });
  }

  async validateVisibleSubmenuInventory() {
    // Menu Product
    await this.submenuProduct.waitFor({ state: "visible" });
    await this.submenuProductVariant.waitFor({ state: "visible" });
    await this.submenuProductCategory.waitFor({ state: "visible" });
    await this.submenuProductBrand.waitFor({ state: "visible" });
    await this.submenuProductGroup.waitFor({ state: "visible" });

    // Menu Stock Management
    await this.submenuStocks.waitFor({ state: "visible" });
    await this.submenuStocksAdjustment.waitFor({ state: "visible" });
    await this.submenuMoveHistory.waitFor({ state: "visible" });

    // Menu Stock Moves
    await this.submenuGoodReceipt.waitFor({ state: "visible" });
    await this.submenuDeliveries.waitFor({ state: "visible" });
    await this.submenuInternalTransfer.waitFor({ state: "visible" });
    await this.submenuBadStock.waitFor({ state: "visible" });

    // Menu Canvassing
    await this.submenuCanvassBooking.waitFor({ state: "visible" });

    // Menu Configuration
    await this.submenuLocation.waitFor({ state: "visible" });
    await this.submenuWarehouse.waitFor({ state: "visible" });
    await this.submenuUoMCategory.waitFor({ state: "visible" });
    await this.submenuUoM.waitFor({ state: "visible" });
  }

  async validatWordingSubmenuInventory() {
    await this.validateVisibleSubmenuInventory();
    // Menu Product
    const actualTextsubmenuProduct = await this.submenuProduct.textContent();
    await expect(actualTextsubmenuProduct).toMatchSnapshot(
      "actualTextsubmenuProduct.txt"
    );
    const actualTextsubmenuProductVariant =
      await this.submenuProductVariant.textContent();
    await expect(actualTextsubmenuProductVariant).toMatchSnapshot(
      "actualTextsubmenuProductVariant.txt"
    );
    const actualTextsubmenuProductCategory =
      await this.submenuProductCategory.textContent();
    await expect(actualTextsubmenuProductCategory).toMatchSnapshot(
      "actualTextsubmenuProductCategory.txt"
    );
    const actualTextsubmenuProductBrand =
      await this.submenuProductBrand.textContent();
    await expect(actualTextsubmenuProductBrand).toMatchSnapshot(
      "actualTextsubmenuProductBrand.txt"
    );
    const actualTextsubmenuProductGroup =
      await this.submenuProductGroup.textContent();
    await expect(actualTextsubmenuProductGroup).toMatchSnapshot(
      "actualTextsubmenuProductGroup.txt"
    );
    // Menu Stock Management
    const actualTextsubmenuStocks = await this.submenuStocks.textContent();
    await expect(actualTextsubmenuStocks).toMatchSnapshot(
      "actualTextsubmenuStocks.txt"
    );
    const actualTextsubmenuStocksAdjustment =
      await this.submenuStocksAdjustment.textContent();
    await expect(actualTextsubmenuStocksAdjustment).toMatchSnapshot(
      "actualTextsubmenuStocksAdjustment.txt"
    );
    const actualTextsubmenuMoveHistory =
      await this.submenuMoveHistory.textContent();
    await expect(actualTextsubmenuMoveHistory).toMatchSnapshot(
      "actualTextsubmenuMoveHistory.txt"
    );
    // Menu Stock Moves
    const actualTextsubmenuGoodReceipt =
      await this.submenuGoodReceipt.textContent();
    await expect(actualTextsubmenuGoodReceipt).toMatchSnapshot(
      "actualTextsubmenuGoodReceipt.txt"
    );
    const actualTextsubmenuDeliveries =
      await this.submenuDeliveries.textContent();
    await expect(actualTextsubmenuDeliveries).toMatchSnapshot(
      "actualTextsubmenuDeliveries.txt"
    );
    const actualTextsubmenuInternalTransfer =
      await this.submenuInternalTransfer.textContent();
    await expect(actualTextsubmenuInternalTransfer).toMatchSnapshot(
      "actualTextsubmenuInternalTransfer.txt"
    );
    const actualTextSubmenuBadStock = await this.submenuBadStock.textContent();
    await expect(actualTextSubmenuBadStock).toMatchSnapshot();
    // Menu Canvassing
    const actualTextsubmenuCanvassBooking =
      await this.submenuCanvassBooking.textContent();
    await expect(actualTextsubmenuCanvassBooking).toMatchSnapshot(
      "actualTextsubmenuCanvassBooking.txt"
    );
    // Menu Configuration
    const actualTextsubmenuLocation = await this.submenuLocation.textContent();
    await expect(actualTextsubmenuLocation).toMatchSnapshot(
      "actualTextsubmenuLocation.txt"
    );
    const actualTextsubmenuWarehouse =
      await this.submenuWarehouse.textContent();
    await expect(actualTextsubmenuWarehouse).toMatchSnapshot(
      "actualTextsubmenuWarehouse.txt"
    );
    const actualTextsubmenuUoMCategory =
      await this.submenuUoMCategory.textContent();
    await expect(actualTextsubmenuUoMCategory).toMatchSnapshot(
      "actualTextsubmenuUoMCategory.txt"
    );
    const actualTextsubmenuUoM = await this.submenuUoM.textContent();
    await expect(actualTextsubmenuUoM).toMatchSnapshot(
      "actualTextsubmenuUoM.txt"
    );
  }

  // Menu Product
  async clicksubmenuProduct() {
    await this.submenuProduct.click();
  }
  async clicksubmenuProductVariant() {
    await this.submenuProductVariant.click();
  }
  async clicksubmenuProductCategory() {
    await this.submenuProductCategory.click();
  }
  async clicksubmenuProductBrand() {
    await this.submenuProductBrand.click();
  }
  async clicksubmenuProductGroup() {
    await this.submenuProductGroup.click();
  }

  // Menu Stock Management
  async clicksubmenuStocks() {
    await this.submenuStocks.click();
  }
  async clicksubmenuStocksAdjustment() {
    await this.submenuStocksAdjustment.click();
  }
  async clicksubmenuMoveHistory() {
    await this.submenuMoveHistory.click();
  }

  // Menu Stock Moves
  async clicksubmenuGoodReceipt() {
    await this.submenuGoodReceipt.click();
  }
  async clicksubmenuDeliveries() {
    await this.submenuDeliveries.click();
  }
  async clicksubmenuInternalTransfer() {
    await this.submenuInternalTransfer.click();
  }

  // Menu Canvassing
  async clicksubmenuCanvassBooking() {
    await this.submenuCanvassBooking.click();
  }

  // Menu Configuration
  async clicksubmenuLocation() {
    await this.submenuLocation.click();
  }
  async clicksubmenuWarehouse() {
    await this.submenuWarehouse.click();
    await this.page.waitForTimeout(1000);
  }
  async clicksubmenuUoMCategory() {
    await this.submenuUoMCategory.click();
  }
  async clicksubmenuUoM() {
    await this.submenuUoM.click();
  }
}
