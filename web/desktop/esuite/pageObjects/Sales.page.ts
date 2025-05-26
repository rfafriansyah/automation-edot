import { Locator, Page, expect } from "@playwright/test";

export class SalesPage {
  readonly page: Page;
  readonly moduleSales: Locator;

  // Order Management
  readonly quotation: Locator;
  readonly salesOrder: Locator;

  // Customer
  readonly customers: Locator;
  readonly customerGroup: Locator;

  // Stock Moves
  readonly branch: Locator;
  readonly region: Locator;

  // Configuration
  readonly pricelist: Locator;

  constructor(page: Page) {
    this.page = page;
    this.moduleSales = page.getByRole("link", { name: "Sales", exact: true });

    this.quotation = page.getByRole("link", { name: "Quotation" });
    this.salesOrder = page.getByRole("link", { name: "Sales Order" });
    this.customers = page.getByRole("link", { name: "Customers" });
    this.customerGroup = page.getByRole("link", { name: "Customer Group" });
    this.branch = page.getByRole("link", { name: "Branch" });
    this.region = page.getByRole("link", { name: "Region" });
    this.pricelist = page.getByRole("link", { name: "Pricelist" });
  }

  async clickmoduleSales() {
    await this.moduleSales.click();
  }

  // Order Management
  async clickquotation() {
    await this.quotation.click();
  }
  async clicksalesOrder() {
    await this.salesOrder.click();
  }

  // Customer
  async clickcustomers() {
    await this.customers.click();
  }
  async clickcustomerGroup() {
    await this.customerGroup.click();
  }

  // Stock Moves
  async clickbranch() {
    await this.branch.click();
  }
  async clickregion() {
    await this.region.click();
  }

  // Configuration
  async clickpricelist() {
    await this.pricelist.click();
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
