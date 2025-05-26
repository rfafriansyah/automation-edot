import { Locator, Page, expect } from "@playwright/test";

export class CompaniesPage {
  readonly page: Page;
  readonly buttonAddCompany: Locator;

  readonly buttonManageLast: Locator;

  readonly getCompanyID: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonAddCompany = page.getByRole("button", { name: "+ Add Company" });

    this.buttonManageLast = page.getByRole("button").getByText("Manage").last();

    this.getCompanyID = page.locator(
      'div[class="container"] > div:nth-child(2) > div:last-child > div:nth-child(2) > div:nth-child(2)'
    );
  }

  async clickbuttonAddCompany() {
    await this.buttonAddCompany.click();
  }

  async clickbuttonManageLast() {
    await this.buttonManageLast.click();
  }

  async getgetCompanyID() {
    const apaIni = await this.getCompanyID.textContent();
    const companyID = apaIni?.split("ID:")[1].split("-")[0].trim();

    return companyID;
  }
}
