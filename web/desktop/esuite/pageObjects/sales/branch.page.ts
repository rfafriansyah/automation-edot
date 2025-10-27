import { Locator, Page, expect } from "@playwright/test";

export class BranchPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async createBranch(payload: any) {
    await this.page.getByRole("link", { name: "Add New" }).click();
    // Input Branch Name
    await this.page
      .getByRole("textbox", { name: "Input Branch Name..." })
      .fill(payload.branchName);
    // Fill tab address
    await this.page.getByRole("tab", { name: "Address" }).click();
    // Fill Address
    await this.page
      .getByRole("textbox", { name: "Street Address*" })
      .fill(payload.streetAddress);
    // Choose Country
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Country" })
      .click();
    await this.page.getByRole("option", { name: "Indonesia" }).click();
    // Choose Province
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Province" })
      .click();

    await this.page
      .getByRole("textbox", { name: "Search Province..." })
      .fill(payload.province);
    await this.page
      .getByRole("option", { name: payload.province, exact: true })
      .click();
    // Choose City
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose City" })
      .click();
    await this.page.getByRole("option", { name: payload.city }).click();
    // Choose District
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose District" })
      .click();
    await this.page.getByRole("option", { name: payload.district }).click();
    // Choose Sub District
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Sub District" })
      .click();
    await this.page.getByRole("option", { name: payload.subdistrict }).click();
    // Choose Postal Code
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Postal Code" })
      .click();
    await this.page.getByRole("option", { name: payload.postalCode }).click();
    // Fill Long Lat
    await this.page.getByRole("spinbutton", { name: "Longitude*" }).click();
    await this.page.getByRole("spinbutton", { name: "Longitude*" }).fill("1");
    await this.page.getByRole("spinbutton", { name: "Latitude*" }).click();
    await this.page.getByRole("spinbutton", { name: "Latitude*" }).fill("1");

    // Tab Ework
    await this.page.getByRole("tab", { name: "ework" }).click();
    await this.page.getByRole("switch", { name: "Use Geofencing" }).click();
    await this.page.getByRole("radio", { name: "Selfie Disabled" }).click();

    // Submit
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Create branch success").isVisible();
  }

  async inputSearchbar(payload: any) {
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("textbox", { name: "Search Data" }).click();
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(payload.branchName);
    await this.page.waitForTimeout(1000);
  }

  async editBranch(payload: any) {
    await this.page.getByRole("link", { name: "View Detail" }).click();
  }
}
