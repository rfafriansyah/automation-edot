import { Locator, Page, expect } from "@playwright/test";

export class MessageTemplatePage {
  readonly page: Page;

  readonly buttonAddNew: Locator;

  readonly txtTemplateName: Locator;
  readonly txtTitleMessage: Locator;
  readonly txtUrl: Locator;
  readonly txtMessage: Locator;

  readonly row1: Locator;
  readonly checkboxRow1: Locator;
  readonly templateNameRow1: Locator;
  readonly messageTitleRow1: Locator;
  readonly messageNotifRow1: Locator;
  readonly createdAtRow1: Locator;
  readonly buttonViewDetailRow1: Locator;

  readonly buttonSubmit: Locator;
  readonly buttonSaveChanges: Locator;
  readonly buttonDelete: Locator;
  readonly buttonConfirm: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAddNew = page.getByRole("button", { name: "Add New" });
    this.txtTemplateName = page.getByTestId("input-name");
    this.txtTitleMessage = page.getByTestId("input-title");
    this.txtUrl = page.getByTestId("input-url");
    this.txtMessage = page.getByTestId("input-message");
    this.row1 = page.locator("table tbody tr:first-child ");
    this.checkboxRow1 = this.row1.locator("td div div button");
    this.templateNameRow1 = this.row1.locator("td:nth-child(2)");
    this.messageTitleRow1 = this.row1.locator(" td:nth-child(3)");
    this.messageNotifRow1 = this.row1.locator(" td:nth-child(4)");
    this.createdAtRow1 = this.row1.locator(" td:nth-child(5)");
    this.buttonViewDetailRow1 = this.row1.locator(
      " td:nth-child(6) div button"
    );

    this.buttonSubmit = page.getByRole("button", { name: "Submit" });
    this.buttonSaveChanges = page.getByRole("button", { name: "Save Changes" });
    this.buttonDelete = page.getByRole("button", { name: "Delete" });
    this.buttonConfirm = page.getByRole("button", { name: "Confirm" });
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

  async clickbuttonSaveChanges() {
    await this.buttonSaveChanges.click();
  }

  async clickbuttonViewDetailRow1() {
    await this.buttonViewDetailRow1.click();
  }

  async validateDetailPage() {
    await expect(this.buttonSaveChanges).toBeVisible();
  }

  async checkcheckboxRow1() {
    await this.checkboxRow1.check();
  }

  async clickbuttonDelete() {
    await this.buttonDelete.click();
  }

  async clickbuttonConfirm() {
    await this.buttonConfirm.click();
  }
}
