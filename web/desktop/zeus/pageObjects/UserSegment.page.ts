import { Locator, Page, expect } from "@playwright/test";
import path from "path";

export class UserSegmentPage {
  readonly page: Page;

  readonly buttonAddNew: Locator;
  readonly txtSegmentName: Locator;
  readonly txtDescription: Locator;
  readonly buttonDiscard: Locator;
  readonly buttonSaveData: Locator;

  // Table User Segment
  readonly row1: Locator;
  readonly segmentName1: Locator;
  readonly buttonViewDetail1: Locator;

  // Detail User Segment
  readonly buttonImportData: Locator;
  readonly buttonUploadNewFile: Locator;

  readonly buttonDelete: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAddNew = page.getByTestId("add-new");
    this.txtSegmentName = page.getByTestId("input");
    this.txtDescription = page.getByTestId("textarea");
    this.buttonDiscard = page.getByRole("button", { name: "Discard" });
    this.buttonSaveData = page.getByRole("button", { name: "Save Data" });
    this.row1 = page.locator("table>tbody:last-child>tr:first-child");
    this.segmentName1 = this.row1.locator("td:first-child>div>div>button");
    this.buttonViewDetail1 = this.row1.locator("td").getByText("View Detail");
    this.buttonDelete = page.getByTestId("delete-ids");
    this.buttonImportData = page.getByRole("button", { name: "Import Data" });
    this.buttonUploadNewFile = page.getByRole("button", {
      name: "Upload New File",
    });
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async filltxtSegmentName(segmentName: any) {
    await this.txtSegmentName.fill(segmentName);
  }

  async filltxtDescription(desc: any) {
    await this.txtDescription.fill(desc);
  }

  async clickbuttonDiscard() {
    await this.buttonDiscard.click();
  }

  async clickbuttonSaveData() {
    await this.buttonSaveData.click();
  }

  async checkSegment() {
    await this.page.waitForTimeout(2000);
    await this.segmentName1.check();
  }

  async clickbuttonDelete() {
    await this.buttonDelete.click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
  }

  async clickbuttonViewDetail1() {
    await this.buttonViewDetail1.click();
  }

  async clickbuttonImportData() {
    await this.buttonImportData.click();
  }

  async clickbuttonUploadNewFile(fileSegmentUsers: any) {
    const fileChooserPromise = this.page.waitForEvent("filechooser");
    await this.buttonUploadNewFile.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(fileSegmentUsers);
    await this.page.getByRole("button", { name: "Submit" }).click();
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
