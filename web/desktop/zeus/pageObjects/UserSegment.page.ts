import { Locator, Page, expect } from "@playwright/test";

export class UserSegmentPage {
  readonly page: Page;

  readonly buttonAddNew: Locator;
  readonly txtSegmentName: Locator;
  readonly buttonDiscard: Locator;
  readonly buttonSaveData: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAddNew = page.getByTestId("add-new");
    this.txtSegmentName = page.getByTestId("input");
    this.buttonDiscard = page.getByRole("button", { name: "Discard" });
    this.buttonSaveData = page.getByRole("button", { name: "Save Data" });
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async filltxtSegmentName(segmentName: any) {
    await this.txtSegmentName.fill(segmentName);
  }

  async clickbuttonDiscard() {
    await this.buttonDiscard.click();
  }

  async clickbuttonSaveData() {
    await this.buttonSaveData.click();
  }

  async validateToastSuccess() {
    await expect(this.page.getByText("Successfully created")).toBeVisible();
  }

  async validateToastDuplicate() {
    await expect(this.page.getByText("Successfully created")).toBeVisible();
  }
}
