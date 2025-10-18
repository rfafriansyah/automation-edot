import { Locator, Page, expect } from "@playwright/test";

export class FinancePage {
  readonly page: Page;

  // Modul Finance
  readonly modulFinance: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul Finance
    this.modulFinance = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(5)>span"
    );
  }

  // Modul Finance
  async validatemodulFinance(text: string) {
    await this.modulFinance.waitFor({ state: "visible" });
    await expect(this.modulFinance).toBeVisible();
    await expect(this.modulFinance).toHaveText(text);
  }
}
