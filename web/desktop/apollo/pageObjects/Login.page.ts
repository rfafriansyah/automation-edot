import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly buttonEmailUsername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonEmailUsername = page.getByRole("button", {
      name: "Use Email or Username",
    });
  }

  async open() {
    await this.page.goto("");
  }

  async clickbuttonEmailUsername() {
    await this.buttonEmailUsername.click();
  }
}
