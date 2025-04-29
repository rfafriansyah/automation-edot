import { Locator, Page, expect } from "@playwright/test";

export class EworkPage {
  readonly page: Page;
  readonly headingEwork: Locator;

  // Menu Dashboard
  readonly menuDashboard: Locator;

  // Menu Aktivitas Salesman
  readonly menuSalesmanActivity: Locator;

  // Menu Rencana Panggilan
  readonly menuCallPlan: Locator;

  // Menu Aktivitas Pelanggan
  readonly menuCustomerActivity: Locator;

  // Menu Konfigurasi
  readonly menuConfiguration: Locator;


  constructor(page: Page) {
    this.page = page;
    this.headingEwork = page.getByRole('heading', { name: 'Ework' })

    this.menuDashboard = page.getByRole('button', { name: 'Dashboard' })
    this.menuSalesmanActivity = page.getByRole('button', { name: 'Salesman Activity' })
    this.menuCallPlan = page.getByRole('button', { name: 'Call Plan' })
    this.menuCustomerActivity = page.getByRole('button', { name: 'Customer Activity' })
    this.menuConfiguration = page.getByRole('button', { name: 'Configuration' })

  }

  async validateEworkPage() {
    await expect(this.headingEwork).toBeVisible()
    await expect(this.menuDashboard).toBeVisible()
    await expect(this.menuSalesmanActivity).toBeVisible()
    await expect(this.menuCallPlan).toBeVisible()
    await expect(this.menuCustomerActivity).toBeVisible()
    await expect(this.menuConfiguration).toBeVisible()
  }

}
