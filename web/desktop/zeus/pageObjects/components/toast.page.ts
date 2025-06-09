import { Locator, Page, expect } from "@playwright/test";

export class ToastComponents {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Validate Toast
  async validateToastSuccessCreated(toastMessage: any) {
    await expect(this.page.getByText(toastMessage)).toBeVisible();
  }

  async validateToastSuccessDeleted(toastMessage: any) {
    await expect(this.page.getByText(toastMessage)).toBeVisible();
  }

  async validateToastSuccessUpload(toastMessage: any) {
    await expect(this.page.getByText(toastMessage)).toBeVisible();
  }
}
