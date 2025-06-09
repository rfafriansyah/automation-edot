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
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async filltxtPushMessageName(pushMessageName: any) {
    await this.txtPushMessageName.fill(pushMessageName);
  }

  async selectdropdownUserSegment(userSegment: any) {
    await this.dropdownUserSegment.click();
    await this.page.getByRole("option", { name: userSegment }).click();
  }

  async selectdropdownPlatform(platform: any) {
    await this.dropdownPlatform.click();
    await this.page.getByRole("option", { name: platform }).click();
  }

  async selectdropdownTemplate(template: any) {
    await this.dropdownTemplate.click();
    await this.page.getByRole("option", { name: template }).click();
  }

  async filltxtDate(date: any) {
    await this.txtDate.click();
    // await this.txtDate.click();
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
}
