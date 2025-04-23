import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly buttonEmailUsername: Locator
  readonly txtEmailUsername: Locator
  readonly buttonLogin: Locator
  readonly txtPassword: Locator
  readonly buttonCreateAccount: Locator
  readonly buttonNext: Locator

  constructor(page: Page) {
    this.page = page;
    this.buttonEmailUsername = page.getByRole('button', { name: 'Use Email or Username' })
    this.txtEmailUsername = page.getByRole('textbox', { name: 'Input Email or Username' })
    this.buttonLogin = page.getByRole('button', { name: 'Log In' })
    this.txtPassword = page.getByRole('textbox', { name: 'Password' })
    this.buttonCreateAccount = page.getByRole('button', { name: 'Create Account' })
    this.buttonNext = page.getByRole('button', { name: 'Next' })
  }

  async open() {
    await this.page.goto("/");
  }

  async clickbuttonEmailUsername() {
    await this.buttonEmailUsername.click()
  }

  async filltxtEmailUsername(input: any) {
    await this.txtEmailUsername.fill(input)
  }

  async clickbuttonLogin() {
    await this.buttonLogin.click()
  }

  async filltxtPassword(input: any) {
    await this.txtPassword.fill(input)
  }
  async clickbuttonCreateAccount() {
    await this.buttonCreateAccount.click()
  }
  async clickbuttonNext() {
    await this.buttonNext.click()
  } 

}
