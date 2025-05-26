import { Locator, Page, expect } from "@playwright/test";

export class FinancePage {
  readonly page: Page;

  readonly moduleFinance: Locator;

  // Finance
  readonly invoices: Locator;
  readonly bills: Locator;
  readonly registerPayments: Locator;
  readonly vendors: Locator;

  // Tax
  readonly taxes: Locator;

  // Credit Limit
  readonly approval: Locator;
  readonly mutation: Locator;

  // Configuration
  readonly paymentMethod: Locator;
  readonly creditLimit: Locator;
  readonly paymentProvider: Locator;

  constructor(page: Page) {
    this.page = page;

    this.moduleFinance = page.getByRole("link", { name: "Finance" });

    this.invoices = page.getByRole("link", { name: "Invoices" });
    this.bills = page.getByRole("link", { name: "Bills" });
    this.registerPayments = page.getByRole("link", {
      name: "Register Payments",
    });
    this.vendors = page.getByRole("link", { name: "Vendors" });
    this.taxes = page.getByRole("link", { name: "Taxes" });
    this.approval = page.getByRole("link", { name: "Approval" });
    this.mutation = page.getByRole("link", { name: "Mutation" });
    this.paymentMethod = page.getByRole("link", { name: "Payment Method" });
    this.creditLimit = page.getByRole("link", { name: "Credit Limit" });
    this.paymentProvider = page.getByRole("link", { name: "Payment Provider" });
  }

  async clickmoduleFinance() {
    await this.moduleFinance.click();
  }

  // Finance
  async clickinvoices() {
    await this.invoices.click();
  }
  async clickbills() {
    await this.bills.click();
  }
  async clickregisterPayments() {
    await this.registerPayments.click();
  }
  async clickvendors() {
    await this.vendors.click();
  }

  // Tax
  async clicktaxes() {
    await this.taxes.click();
  }

  // Credit Limit
  async clickapproval() {
    await this.approval.click();
  }
  async clickmutation() {
    await this.mutation.click();
  }

  // Configuration
  async clickpaymentMethod() {
    await this.paymentMethod.click();
  }
  async clickcreditLimit() {
    await this.creditLimit.click();
  }
  async clickpaymentProvider() {
    await this.paymentProvider.click();
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
