import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly logoEdot: Locator;
  readonly formLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formLogin = this.page.locator("//form[@autocomplete='off']");
  }

  async open() {
    await this.page.goto("");

    let link = await this.formLogin.getAttribute("action");

    return link;
  }

  async goto(link) {
    console.log(link);
  }
}
