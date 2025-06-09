import { Locator, Page, expect } from "@playwright/test";
import { accessSync } from "fs";

export class PushMessagePage {
  readonly page: Page;

  readonly buttonAddNew: Locator;

  readonly txtPushMessageName: Locator;
  readonly dropdownUserSegment: Locator;
  readonly dropdownPlatform: Locator;
  readonly dropdownTemplate: Locator;
  readonly txtDate: Locator;
  readonly txtTime: Locator;

  readonly buttonSaveDraft: Locator;
  readonly buttonReviewPublish: Locator;
  readonly buttonConfirmPublish: Locator;

  readonly row1: Locator;
  readonly checkboxRow1: Locator;
  readonly pushMessageRow1: Locator;
  readonly segmentsRow1: Locator;
  readonly platformRow1: Locator;
  readonly templateNameRow1: Locator;
  readonly scheduleRow1: Locator;
  readonly createdAtRow1: Locator;
  readonly statusRow1: Locator;
  readonly buttonViewDetailRow1: Locator;
  readonly buttonThreeDotsRow1: Locator;

  readonly buttonDelete: Locator;
  readonly buttonConfirm: Locator;

  constructor(page: Page) {
    this.page = page;

    this.buttonAddNew = page.getByRole("button", { name: "Add New" });
    this.txtPushMessageName = page.getByRole("textbox", {
      name: "Input Push Message Name...",
    });
    this.dropdownUserSegment = page.getByPlaceholder("Choose User Segments");
    this.dropdownPlatform = page.getByPlaceholder("Choose Platform");
    this.dropdownTemplate = page.getByPlaceholder("Choose Template");
    this.txtDate = page.locator("div").filter({ hasText: /^Date$/ });
    this.txtTime = page.locator("div").filter({ hasText: /^Time$/ });
    this.buttonSaveDraft = page.getByRole("button", { name: "Save as Draft" });
    this.buttonReviewPublish = page.getByRole("button", {
      name: "Review & Publish",
    });
    this.buttonConfirmPublish = page.getByRole("button", {
      name: "Confirm & Publish",
    });

    this.row1 = page.locator("table tbody tr:first-child");
    this.checkboxRow1 = this.row1.locator(
      "td:nth-child(1) button div div button"
    );
    this.pushMessageRow1 = this.row1.locator("td:nth-child(2)");
    this.segmentsRow1 = this.row1.locator("td:nth-child(3)");
    this.platformRow1 = this.row1.locator("td:nth-child(4)");
    this.templateNameRow1 = this.row1.locator("td:nth-child(5)");
    this.scheduleRow1 = this.row1.locator("td:nth-child(6");
    this.createdAtRow1 = this.row1.locator("td:nth-child(7)");
    this.statusRow1 = this.row1.locator("td:nth-child(8)");
    this.buttonViewDetailRow1 = this.row1.locator(
      "td:nth-child(9) div button:nth-child(1)"
    );
    this.buttonThreeDotsRow1 = this.row1.locator(
      "td:nth-child(9) div button:nth-child(2)"
    );

    this.buttonDelete = page.getByRole("button", { name: "Delete" });
    this.buttonConfirm = page.getByRole("button", { name: "Confirm" });
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async filltxtPushMessageName(pushMessageName: any) {
    await this.txtPushMessageName.fill(pushMessageName);
  }

  async selectdropdownUserSegment(userSegment: any) {
    await this.dropdownUserSegment.click();
    await this.page.getByPlaceholder("Choose User Segments").fill(userSegment);
    await this.page.getByRole("option", { name: userSegment }).click();
  }

  async selectdropdownPlatform(platform: any) {
    await this.dropdownPlatform.click();
    await this.page.getByRole("option", { name: platform }).click();
  }

  async selectdropdownTemplate(template: any) {
    await this.dropdownTemplate.click();
    await this.page.getByPlaceholder("Choose Template").fill(template);
    await this.page.getByRole("option", { name: template }).click();
  }

  async filltxtDate(date: any) {
    await this.txtDate.click();
    await this.page.getByRole("button", { name: date }).click();
    await this.page.getByRole("button", { name: "Set" }).click();
  }

  async filltxtTime(time: any) {
    await this.txtTime.click();
    await this.page
      .getByRole("button", { name: time.hour, exact: true })
      .click();
    await this.page.getByRole("button", { name: time.minute }).click();
    await this.page.getByRole("button", { name: time.day }).click();
    await this.page.getByRole("button", { name: "Set" }).click();
  }

  async clickbuttonSaveDraft() {
    await this.buttonSaveDraft.click();
  }

  async clickbuttonReviewPublish() {
    await this.buttonReviewPublish.click();
  }

  async clickbuttonConfirmPublish() {
    await this.buttonConfirmPublish.click();
  }

  async clickbuttonViewDetailRow1() {
    await this.buttonViewDetailRow1.click();
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
