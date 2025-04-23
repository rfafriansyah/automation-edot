import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly logoEdot: Locator;
  readonly formLogin: Locator;

  readonly txtCompanyID: Locator;
  readonly txtEmployeeIDUsername: Locator;
  readonly txtPassword: Locator;
  readonly buttonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formLogin = page.locator("//form[@autocomplete='off']");

    this.txtCompanyID = page.locator('div').filter({ hasText: /^Company ID$/ }).getByRole('textbox')
    this.txtEmployeeIDUsername = page.locator('input[name="employee_id"]')
    this.txtPassword = page.locator('input[name="password"]')
    this.buttonLogin = page.getByRole('button', { name: 'Log In' })
  }

  async open() {
    await this.page.goto("");

    // let link = await this.formLogin.getAttribute("action");

    // return link;
  }

  async goto(link) {
    console.log(link);
  }

  async filltxtCompanyID(input: any) {
    await this.txtCompanyID.fill(input);
  }
  async filltxtEmployeeIDUsername(input: any) {
    await this.txtEmployeeIDUsername.fill(input);
  }
  async filltxtPassword(input: any) {
    await this.txtPassword.fill(input);
  }
  async clickbuttonLogin() {
    await this.buttonLogin.click();
  }
}
