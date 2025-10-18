import { Locator, Page, expect } from "@playwright/test";

export class EmitraPage {
  readonly page: Page;

  // Modul Emitra
  readonly modulEmitra: Locator;

  // Title Emitra
  readonly titleEmitra: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul Emitra
    this.modulEmitra = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(2)>span"
    );

    // Title Emitra
    this.titleEmitra = page.locator("");
  }

  // Modul Emitra
  async validatekmodulEmitra(text: string) {
    await this.modulEmitra.waitFor({ state: "visible" });
    await expect(this.modulEmitra).toBeVisible();
    await expect(this.modulEmitra).toHaveText(text);
  }

  async clickmodulEmitra() {
    await this.modulEmitra.waitFor({ state: "visible" });
    await expect(this.modulEmitra).toBeVisible();
    await this.modulEmitra.click();
  }
}
