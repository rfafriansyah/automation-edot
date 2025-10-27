import { Locator, Page, expect } from "@playwright/test";

export class CustomersPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createCustomers(payload: any) {
    await this.page.getByRole("link", { name: "Add New" }).click();
    // Fill Customer Name
    await this.page
      .getByRole("textbox", { name: "Input Customer Name..." })
      .click();
    await this.page
      .getByRole("textbox", { name: "Input Customer Name..." })
      .fill(payload.customerName);
    // click tab address
    await this.page.getByRole("tab", { name: "Address" }).click();
    // choose address type
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Address Type" })
      .click();
    await this.page.getByRole("option", { name: "Others" }).click();
    // fill street address
    await this.page.getByRole("textbox", { name: "Street Address" }).click();
    await this.page
      .getByRole("textbox", { name: "Street Address" })
      .fill("test address");
    // fill country
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Country" })
      .click();
    await this.page.getByRole("option", { name: "Indonesia" }).click();
    // fill province
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Province" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Province..." })
      .fill("jakarta");
    await this.page.getByRole("option", { name: "DKI JAKARTA" }).click();
    // choose city
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose City" })
      .click();
    await this.page.getByRole("option", { name: "JAKARTA SELATAN" }).click();
    // choose district
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose District" })
      .click();
    await this.page.getByRole("option", { name: "PESANGGRAHAN" }).click();
    // choose sub district
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Sub District" })
      .click();
    await this.page.getByRole("option", { name: "BINTARO" }).click();
    // submit
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Create customers success").isVisible();
  }
}
