import { Locator, Page, expect } from "@playwright/test";

export class HeaderComponent {
  readonly page: Page;

  readonly maskingProfileUser: Locator;
  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  readonly moduleEwork: Locator;
  readonly moduleEmitra: Locator;
  readonly moduleSales: Locator;
  readonly moduleInventory: Locator;
  readonly moduleFinance: Locator;
  readonly moduleMarketing: Locator;
  readonly moduleHR: Locator;

  constructor(page: Page) {
    this.page = page;

    this.maskingProfileUser = page.locator("header>section:nth-child(2)>div");
    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );

    // this.moduleEwork = page.locator(
    //   "body>header>section:nth-child(2)>ul>a:nth-child(1)"
    // );
    this.moduleEwork = page.getByRole("link", { name: "ework" });
    this.moduleEmitra = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(2)"
    );
    // this.moduleSales = page.locator(
    //   "body>header>section:nth-child(2)>ul>a:nth-child(3)"
    // );
    this.moduleSales = page.getByRole("link").getByText("Sales").first();
    // this.moduleInventory = page.locator(
    //   "body>header>section:nth-child(2)>ul>a:nth-child(4)"
    // );
    this.moduleInventory = page.getByRole("link").getByText("Inventory");
    // this.moduleFinance = page.locator(
    //   "body>header>section:nth-child(2)>ul>a:nth-child(5)"
    // );
    this.moduleFinance = page.getByRole("link", { name: "Finance" });
    // this.moduleMarketing = page.locator(
    //   "body>header>section:nth-child(2)>ul>a:nth-child(6)"
    // );
    this.moduleMarketing = page.getByRole("link", { name: "Marketing" });
    // this.moduleHR = page.locator(
    //   "body>header>section:nth-child(2)>ul>a:nth-child(7)"
    // );
    this.moduleHR = page.getByRole("link", { name: "HR" });
  }

  async validateWording() {
    await this.moduleEwork.waitFor({ state: "visible" });
    await expect(this.moduleEwork).toBeVisible();
    await expect(this.moduleEwork).toMatchAriaSnapshot("modulInventory.txt");
  }

  async validateAllModulesVisible() {
    await this.moduleEwork.waitFor({ state: "visible" });
    // await this.moduleEmitra.waitFor({ state: "visible" });
    await this.moduleSales.waitFor({ state: "visible" });
    await this.moduleInventory.waitFor({ state: "visible" });
    await this.moduleFinance.waitFor({ state: "visible" });
    await this.moduleMarketing.waitFor({ state: "visible" });
    await this.moduleHR.waitFor({ state: "visible" });
  }

  async clickmoduleInventory() {
    await this.moduleInventory.click();
  }
  async clickmoduleSales() {
    await this.page
      .getByRole("link", { name: "Sales", exact: true })
      .waitFor({ state: "visible" });
    await this.page.getByRole("link", { name: "Sales", exact: true }).click();
  }
}
