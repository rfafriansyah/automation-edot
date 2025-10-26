import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class UomCategorySubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleUomCaregory: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleUomCaregory = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 2000, height: 1500 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listUomCategory.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleUomCaregory.textContent();
    await expect(actualText).toMatchSnapshot("titleUomCaregory.txt");
  }

  async clickButtonAddNew() {
    await this.page.getByRole("button", { name: "Add New" }).click();
  }

  async inputFieldName(text: any) {
    await this.page.getByRole("textbox", { name: "Name*" }).fill(text);
  }

  async clickButtonSubmit() {
    await this.page.getByRole("button", { name: "Submit" }).click();
  }

  async validateToastMessage(text: any) {
    await this.page.getByText(text).click();
  }

  async inputFieldSearchbar(text: any) {
    await this.page.getByRole("textbox", { name: "Search Data" }).click();
    await this.page.getByRole("textbox", { name: "Search Data" }).fill(text);
    await this.page.waitForTimeout(1000);
  }

  async clickButtonViewDetail() {
    await this.page
      .getByRole("button", { name: "View Detail" })
      .first()
      .click();
  }
  async clickButtonSaveChanges() {
    await this.page.getByRole("button", { name: "Save Changes" }).click();
  }

  async deleteUomCategory() {
    await this.page
      .getByRole("checkbox", { name: "Select row" })
      .first()
      .click();
    await this.page.getByRole("button", { name: "Delete" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page.getByText("Success delete uom category").click();
  }
}
