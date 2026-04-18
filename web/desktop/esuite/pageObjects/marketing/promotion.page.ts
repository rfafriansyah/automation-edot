import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class PromotionPage {
  readonly page: Page;
  readonly buttonAddNew: Locator;
  readonly fieldPromotionName: Locator;
  readonly drpdwnPromotionType: Locator;
  readonly fieldReferenceDocument: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonAddNew = page.getByTestId("prBtnAddNewPromotion");
    this.fieldPromotionName = page.getByTestId("prInputPromotionName");
    this.drpdwnPromotionType = page.getByTestId("prSelectPromotionType");
    this.fieldReferenceDocument = page.getByRole("textbox", {
      name: "Reference Document Number",
    });
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async fillfieldPromotionName() {
    await this.fieldPromotionName.fill("Promotion Testing Name");
  }

  async fillPromotionType() {
    await this.drpdwnPromotionType.click();
    await this.page
      .getByRole("textbox", { name: "Search Promotion Type" })
      .fill("Tipe B");
    await this.page.getByText("Tipe B").click();
  }

  async fillfieldReferenceDocument(referenceDocument: any) {
    await this.fieldReferenceDocument.fill(referenceDocument);
  }
}
