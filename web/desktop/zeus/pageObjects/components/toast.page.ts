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

  async validateToastDuplicate() {
    await expect(this.page.getByText("Successfully created")).toBeVisible();
  }

  async validateToastSuccessUpload(toastMessage: any) {
    await expect(this.page.getByText(toastMessage)).toBeVisible();
  }
}
