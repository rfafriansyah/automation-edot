import { Locator, Page, expect } from "@playwright/test";

export class MessageTemplatePage {
  readonly page: Page;

  readonly buttonAddNew: Locator;

  readonly txtTemplateName: Locator;
  readonly txtTitleMessage: Locator;
  readonly txtUrl: Locator;
  readonly txtMessage: Locator;

  readonly buttonSubmit: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAddNew = page.getByRole("button", { name: "Add New" });
    this.txtTemplateName = page.getByTestId("input-name");
    this.txtTitleMessage = page.getByTestId("input-title");
    this.txtUrl = page.getByTestId("input-url");
    this.txtMessage = page.getByTestId("input-message");

    this.buttonSubmit = page.getByRole("button", { name: "Submit" });
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async filltxtTemplateName(messageName: any) {
    await this.txtTemplateName.fill(messageName);
  }

  async filltxtTitleMessage(titleMessage: any) {
    await this.txtTitleMessage.fill(titleMessage);
  }

  async filltxtUrl(url: any) {
    await this.txtUrl.fill(url);
  }

  async filltxtMessage(message: any) {
    await this.txtMessage.fill(message);
  }

  async clickbuttonSubmit() {
    await this.buttonSubmit.click();
  }
}
