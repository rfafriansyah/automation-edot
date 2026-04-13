import { Locator, Page, expect } from "@playwright/test";

export class QuotationPage {
  readonly page: Page;
  readonly buttonAddNew: Locator;
  readonly fieldCustomer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonAddNew = page.getByTestId("sqBtnAddNew");
    this.fieldCustomer = page.getByTestId("sqInputFormCustomerSearch");
  }

  async screenshotListPage() {
    await this.page.waitForLoadState("networkidle");
    await this.page.setViewportSize({ width: 1600, height: 1200 });
    await expect(this.page).toHaveScreenshot("quotationList.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        await this.page.locator(
          'section>div>table[data-testid="data-table"]>tbody',
        ),
      ],
    });
  }

  async clikbuttonAddNew() {
    await this.buttonAddNew.click();
  }

  async fillfieldCustomer(customer: any){
    await this.fieldCustomer    
  }
}
