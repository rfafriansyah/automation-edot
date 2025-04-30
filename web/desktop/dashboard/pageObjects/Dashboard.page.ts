import { Locator, Page, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly menuUserDemography: Locator
  readonly breadcrumbs: Locator
  readonly header: Locator
  readonly datePicker: Locator
  readonly buttonExportPDF: Locator

  constructor(page: Page) {
    this.page = page;
    this.menuUserDemography = page.getByRole('menuitem', { name: 'User Demography' })
    this.breadcrumbs = page.getByText('Dashboard/User Demography')
    this.header = page.getByRole('heading', { name: 'User Demography' })
    this.datePicker = page.getByRole('textbox', { name: 'Select year' })
    this.buttonExportPDF = page.locator('[data-testid="metabase"]').contentFrame().getByRole('button', { name: 'document icon Export as PDF' })
  }

  async validatePage() {
    await expect(this.menuUserDemography).toBeVisible()
    await expect(this.breadcrumbs).toBeVisible()
    await expect(this.header).toBeVisible()
    await expect(this.datePicker).toBeVisible()
    await expect(this.buttonExportPDF).toBeVisible()
  }
}