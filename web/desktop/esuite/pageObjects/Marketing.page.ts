import { Locator, Page, expect } from "@playwright/test";

export class MarketingPage {
  readonly page: Page;

  // Modul Pemasaran
  readonly modulPemasaran: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul Pemasaran
    this.modulPemasaran = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(6)>span"
    );
  }

  // Modul Pemasaran
  async validatemodulPemasaran(text: string) {
    await this.modulPemasaran.waitFor({ state: "visible" });
    await expect(this.modulPemasaran).toBeVisible();
    await expect(this.modulPemasaran).toHaveText(text);
  }
}
