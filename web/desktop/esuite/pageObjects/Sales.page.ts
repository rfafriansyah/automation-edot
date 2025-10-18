import { Locator, Page, expect } from "@playwright/test";

export class SalesPage {
  readonly page: Page;

  // Modul Penjualan
  readonly modulPenjualan: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul Penjualan
    this.modulPenjualan = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(3)>span"
    );
  }

  // Modul Penjualan
  async validatemodulPenjualan(text: string) {
    await this.modulPenjualan.waitFor({ state: "visible" });
    await expect(this.modulPenjualan).toBeVisible();
    await expect(this.modulPenjualan).toHaveText(text);
  }
}
