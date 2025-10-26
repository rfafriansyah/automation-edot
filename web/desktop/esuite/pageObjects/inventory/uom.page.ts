import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class UomSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleUom: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleUom = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 2000, height: 1500 });
    await this.page.waitForTimeout(3000);
    // await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listUom.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleUom.textContent();
    await expect(actualText).toMatchSnapshot("titleUom.txt");
  }

  async clickButtonNew() {
    await this.page.getByRole("button", { name: "Add New" }).click();
  }

  async inputFormAddUoM(payload: any) {
    await this.page.getByRole("textbox", { name: "Name*" }).fill(payload.name);
    await this.page
      .getByRole("textbox", { name: "UoM Format*" })
      .fill(payload.format);
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose UoM Category" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(payload.category);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: payload.category, exact: true })
      .first()
      .click();
    await this.page.getByRole("switch", { name: "Set as Reference" }).click();
    await this.page
      .getByRole("spinbutton", { name: "Ratio*" })
      .fill(payload.ratio);
    await this.page
      .getByRole("spinbutton", { name: "Rounding Precision*" })
      .fill(payload.roundingPrecision);
    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Create unit of measure success").isVisible();
  }

  async inputSearchbar(text: any) {
    await this.page.getByRole("textbox", { name: "Search Data" }).click();
    await this.page.getByRole("textbox", { name: "Search Data" }).fill(text);
    await this.page.waitForTimeout(1000);
  }

  async clickButtonDetail() {
    await this.page
      .getByRole("button", { name: "View Detail" })
      .first()
      .click();
  }

  async inputFormEditUoM(payload: any) {
    await this.page
      .getByRole("textbox", { name: "Name*" })
      .fill(payload.nameEdit);
    await this.page.getByRole("radio", { name: "Inactive" }).click();
    await this.page
      .getByRole("textbox", { name: "UoM Format*" })
      .fill(payload.formatEdit);
    // await this.page.pause();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: payload.category })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Data" })
      .fill(payload.categoryEdit);
    await this.page
      .getByRole("option", { name: payload.category, exact: true })
      .click();
    // await this.page.getByRole("switch", { name: "Set as Reference" }).click();
    await this.page
      .getByRole("spinbutton", { name: "Ratio*" })
      .fill(payload.ratioEdit);
    await this.page
      .getByRole("spinbutton", { name: "Rounding Precision*" })
      .fill(payload.roundingPrecisionEdit);
    await this.page.getByRole("button", { name: "Save Changes" }).click();
    await this.page.getByText("Update unit of measure success").isVisible();
  }

  async deleteUoM() {
    await this.page
      .getByRole("checkbox", { name: "Select row" })
      .first()
      .click();
    await this.page.getByRole("button", { name: "Delete" }).click();
    await this.page.getByRole("button", { name: "Confirm" }).click();
    await this.page.getByText("Success delete unit of measure").isVisible();
  }
}
