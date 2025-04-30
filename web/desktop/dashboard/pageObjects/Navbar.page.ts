import { Locator, Page, expect } from '@playwright/test';

export class NavbarPage {
  readonly page: Page;
  readonly moduleDashboard: Locator
  readonly moduleCore: Locator
  readonly moduleMitra: Locator
  readonly moduleEdotApp: Locator

  constructor(page: Page) {
    this.page = page;
    this.moduleDashboard = page.getByRole('link', { name: 'Dashboard' })
    this.moduleCore = page.getByRole('link', { name: 'Core' })
    this.moduleMitra = page.getByRole('link', { name: 'Mitra' })
    this.moduleEdotApp = page.getByRole('link', { name: 'eDOT App' })
  }

  async validatePage() {
    await expect(this.moduleDashboard).toBeVisible()
    await expect(this.moduleCore).toBeVisible()
    await expect(this.moduleMitra).toBeVisible()
    await expect(this.moduleEdotApp).toBeVisible()
  }

  async clickmoduleDashboard() {
    await this.moduleDashboard.click()
  }
  async clickmoduleMitra() {
    await this.moduleMitra.click()
  }
  async clickmoduleCore() {
    await this.moduleCore.click()
  }
  async clickmoduleEdotApp() {
    await this.moduleEdotApp.click()
  }
}