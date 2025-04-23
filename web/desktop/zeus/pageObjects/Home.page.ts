import { Locator, Page, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly header: Locator
  readonly titleTableCompanyUser: Locator

  constructor(page: Page) {
    this.page = page
    this.header = page.getByRole('heading', { name: 'Zeus' })
    this.titleTableCompanyUser = page.getByRole('heading', { name: 'Company User' })

  }

  async validateHomePage() {
    await expect(this.header).toBeVisible()
    await expect(this.header).toHaveText('Zeus')
    await expect(this.titleTableCompanyUser).toBeVisible()
    await expect(this.titleTableCompanyUser).toHaveText('Company User')
  }


}
