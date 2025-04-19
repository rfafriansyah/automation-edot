import { Locator, Page, expect } from "@playwright/test";

export class CompaniesPage {
  readonly page: Page;
  readonly buttonAddCompany: Locator

  readonly buttonManageLast: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonAddCompany = page.getByRole('button', { name: '+ Add Company' })

    this.buttonManageLast = page.getByRole('button').getByText('Manage').last()
  }

  async clickbuttonAddCompany() {
    await this.buttonAddCompany.click()
  }

  async clickbuttonManageLast() {
    await this.buttonManageLast.click()
  }
}
