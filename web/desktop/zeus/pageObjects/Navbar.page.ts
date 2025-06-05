import { Locator, Page, expect } from "@playwright/test";

export class NavbarPage {
  readonly page: Page;

  // Menu Notification
  readonly submenuUserSegment: Locator;
  readonly submenuMessageTemplate: Locator;
  readonly submenuPushMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.submenuUserSegment = page.getByRole("button", {
      name: "User Segments",
    });
    this.submenuMessageTemplate = page.getByRole("button", {
      name: "Message Template",
    });
    this.submenuPushMessage = page.getByRole("button", {
      name: "Push Message",
    });
  }

  async clicksubmenuUserSegment() {
    await this.submenuUserSegment.click();
  }

  async clicksubmenuMessageTemplate() {
    await this.submenuMessageTemplate.click();
  }

  async clicksubmenuPushMessage() {
    await this.submenuPushMessage.click();
  }
}
