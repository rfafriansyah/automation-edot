import { Locator, Page, expect } from "@playwright/test";

export class NavbarPage {
  readonly page: Page;
  readonly buttonHome: Locator
  readonly buttonCompanies: Locator
  readonly buttonSettings: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonHome = page.getByRole('link', { name: 'Home' })
    this.buttonCompanies = page.getByRole('link', { name: 'Companies' })
    this.buttonSettings = page.getByRole('link', { name: 'Settings' })
  }

  async open() {
    await this.page.goto("/");
  }

  async refresh() {
    try {
      if (await this.page.getByRole('img', { name: 'Picture of the author' }).isVisible()) {
        this.page.reload()
      }
    } catch (error) {

    }
  }

  async clickbuttonHome() {
    await this.buttonHome.click()
  }

  async clickbuttonCompanies() {
    await this.buttonCompanies.click()
  }

  async clickbuttonSettings() {
    await this.buttonSettings.click()
  }
}
