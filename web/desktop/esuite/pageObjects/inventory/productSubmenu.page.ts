import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ProductSubmenuPage {
  readonly page: Page;

  readonly headerComponent: HeaderComponent;

  readonly titleProduct: Locator;
  readonly searchbar: Locator;
  readonly buttonAddNew: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  // Panel Filter
  readonly dropdownPanelFilter: Locator;
  readonly titleFilterProductType: Locator;
  readonly searchbarFilterProductType: Locator;
  readonly titleFilterProductCategory: Locator;
  readonly searchbarFilterProductCategory: Locator;
  readonly titleFilterProductVariants: Locator;
  readonly searchbarFilterProductVariants: Locator;
  readonly buttonSubmitPanelFilter: Locator;

  // Form Create Product
  //   // Tab Basic Info
  //   readonly inputProductType: Locator;
  //   readonly inputCategory: Locator;
  //   readonly inputProductBrand: Locator;
  //   readonly inputIndustry: Locator;
  //   readonly inputExternalCode: Locator;
  //   readonly inputCost: Locator;
  //   readonly inputBasePrice: Locator;
  //   readonly inputPurchaseUoM: Locator;
  //   readonly inputBaseUoM: Locator;
  //   // product 1
  //   readonly inputLevel1: Locator;
  //   readonly inputQty1: Locator;
  //   readonly inputUoM1: Locator;
  //   readonly inputConversion1: Locator;
  //   // product 2
  //   readonly inputLevel2: Locator;
  //   readonly inputQty2: Locator;
  //   readonly inputUoM2: Locator;
  //   readonly inputConversion2: Locator;
  //   // product 3
  //   readonly inputLevel3: Locator;
  //   readonly inputQty3: Locator;
  //   readonly inputUoM3: Locator;
  //   readonly inputConversion3: Locator;
  //   // button add new level
  //   readonly buttonAddNewLevel: Locator;

  //   // Tab Attribute & Variant
  //   readonly buttonAddNewAttribute: Locator;
  //   readonly inputAttributeName1: Locator;
  //   readonly inputValue1: Locator;
  //   readonly inputAttributeName2: Locator;
  //   readonly inputValue3: Locator;
  // Tab Availability
  // Tab Inventory

  constructor(page: Page) {
    this.page = page;

    this.headerComponent = new HeaderComponent(page);

    this.titleProduct = page.locator("main>header>div:nth-child(1)>h2");
    this.searchbar = page.locator("main>header>div:nth-child(2)>div>input");
    this.buttonAddNew = page.locator("main>header>div:nth-child(3)>a");

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );

    // Panel Filter
    this.dropdownPanelFilter = page.locator(
      "main>header>div:nth-child(2)>button"
    );
    this.titleFilterProductType = page.locator("");
    this.searchbarFilterProductType = page.locator("");
    this.titleFilterProductCategory = page.locator("");
    this.searchbarFilterProductCategory = page.locator("");
    this.titleFilterProductVariants = page.locator("");
    this.searchbarFilterProductVariants = page.locator("");
    this.buttonSubmitPanelFilter = page.locator("");
  }

  async screenshotListPage() {
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProduct.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      timeout: 2000,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleProduct.textContent();
    await expect(actualText).toMatchSnapshot("titleProduct.txt");
  }
}
