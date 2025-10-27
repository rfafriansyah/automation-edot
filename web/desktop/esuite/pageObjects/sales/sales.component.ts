import { Locator, Page, expect } from "@playwright/test";

export class SalesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickSubmenuBranch() {
    await this.page
      .getByRole("link", { name: "Branch" })
      .waitFor({ state: "visible" });
    await this.page.getByRole("link", { name: "Branch" }).click();
  }

  async clickSubmenuCustomers() {
    await this.page.getByRole("link", { name: "Customers" }).isVisible();
    await this.page.getByRole("link", { name: "Customers" }).click();
  }
}
