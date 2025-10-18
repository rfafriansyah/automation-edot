import { Locator, Page, expect } from "@playwright/test";

export class HRPage {
  readonly page: Page;

  // Modul HR
  readonly modulHR: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul HR
    this.modulHR = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(7)>span"
    );
  }

  async validatemodulHR(text: string) {
    await this.modulHR.waitFor({ state: "visible" });
    await expect(this.modulHR).toBeVisible();
    await expect(this.modulHR).toHaveText(text);
  }
}
