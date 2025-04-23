import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly buttonLoginWithEdot: Locator

  constructor(page: Page) {
    this.page = page
    this.buttonLoginWithEdot

  }

  async open() {
    await this.page.goto("");
  }
  async clickbuttonLoginWithEdot() {
    await this.buttonLoginWithEdot.click()
  }


}
