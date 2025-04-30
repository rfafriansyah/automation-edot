import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly buttonLoginWithEdot: Locator
  readonly txtEmailUsername: Locator
  readonly txtPassword: Locator

  readonly buttonLogin: Locator

  constructor(page: Page) {
    this.page = page
    this.buttonLoginWithEdot = page.getByRole('button', { name: 'Sign in with eDOT' })
    this.txtEmailUsername = page.getByRole('textbox', { name: 'Input Email or Username' })
    this.txtPassword = page.getByRole('textbox', { name: 'Password' })

    this.buttonLogin = page.getByRole('button', { name: 'Log In' })

  }

  async open() {
    await this.page.goto("");
  }
  async clickbuttonLoginWithEdot() {
    await this.buttonLoginWithEdot.click()
  }
  async filltxtEmailUsername(input: any) {
    await this.txtEmailUsername.fill(input)
  }
  async filltxtPassword(input: any) {
    await this.txtPassword.fill(input)
  }

  async clickbuttonLogin() {
    await this.buttonLogin.click()
  }


}
