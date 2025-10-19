import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class ProductSubmenuPage {
  readonly page: Page;

  readonly headerComponent: HeaderComponent;

  readonly titleProduct: Locator;
  readonly searchbar: Locator;
  readonly buttonAddNew: Locator;
  readonly buttonSubmit: Locator;
  readonly toastMessage: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  // Table List
  readonly rowProductID1: Locator;
  readonly rowProductName1: Locator;
  readonly rowCost1: Locator;
  readonly rowBasePrice1: Locator;
  readonly rowCategory1: Locator;
  readonly rowActions: Locator;

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
  readonly fieldProductName: Locator;
  readonly fieldProductType: Locator;
  readonly fieldCategory: Locator;
  readonly fieldProductBrand: Locator;
  readonly fieldIndustry: Locator;
  readonly fieldExternalCode: Locator;
  readonly fieldCost: Locator;
  readonly fieldBasePrice: Locator;
  readonly fieldBaseUom: Locator;
  readonly fieldLevel1: Locator;
  readonly fieldLevel2: Locator;
  readonly fieldUomLevel2: Locator;
  readonly fieldConvertionLevel2: Locator;
  readonly fieldLevel3: Locator;
  readonly fieldUomLevel3: Locator;
  readonly fieldConvertionLevel3: Locator;
  readonly buttonAddNewLevel: Locator;
  // Tab Attribute & Variant
  readonly tabAttributeVariant: Locator;
  readonly buttonAddNewAttribute: Locator;
  readonly fieldAttributeName: Locator;
  readonly fieldValueAttributeName: Locator;

  constructor(page: Page) {
    this.page = page;

    this.headerComponent = new HeaderComponent(page);

    this.titleProduct = page.locator("main>header>div:nth-child(1)>h2");
    this.searchbar = page.locator("main>header>div:nth-child(2)>div>input");
    this.buttonAddNew = page.locator("main>header>div:nth-child(3)>a");
    this.buttonSubmit = page.locator("div>main>header>div>button:nth-child(2)");
    this.toastMessage = page.locator("body>section>ol>li>div:nth-child(2)");
    this.searchbar = page.locator("main>header>div:nth-child(2)>div>input");

    // Table List
    this.rowProductID1 = page.locator(
      "section>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(3)"
    );
    this.rowProductName1 = page.locator(
      "section>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(4)"
    );
    this.rowCost1 = page.locator(
      "section>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(5)"
    );
    this.rowBasePrice1 = page.locator(
      "section>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(6)"
    );
    this.rowCategory1 = page.locator(
      "section>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(7)"
    );
    this.rowActions = page.locator(
      "section>div:nth-child(1)>table>tbody>tr:nth-child(1)>td:nth-child(8)"
    );

    this.maskingtableBody = page.locator(
      "main>section:nth-child(2)>div>table>tbody"
    );
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );

    this.fieldProductName = page.locator("main>section>div>div>div>input");
    this.fieldProductType = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(1)>div>div:nth-child(1)>div>div>div>div:nth-child(1)>input"
    );
    this.fieldCategory = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(1)>div>div:nth-child(2)>div>div>div>div>input"
    );
    this.fieldProductBrand = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(1)>div>div:nth-child(3)>div>div>div>div:nth-child(1)>input"
    );
    this.fieldIndustry = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(1)>div>div:nth-child(4)>div>div>div>div:nth-child(1)>input"
    );
    this.fieldExternalCode = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(1)>div>div:nth-child(5)>div>input"
    );
    this.fieldCost = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div>input"
    );
    this.fieldBasePrice = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div>input"
    );
    this.fieldBaseUom = page.locator(
      "main:nth-child(2)>div:nth-child(4)>section:nth-child(2)>div:nth-child(2)>div:nth-child(4)>div>div>div>div:nth-child(1)>input"
    );
    this.fieldLevel1 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr>td:nth-child(1)>button"
    );
    this.fieldLevel2 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr:nth-child(2)>td:nth-child(1)>button"
    );
    this.fieldUomLevel2 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr:nth-child(2)>td:nth-child(3)>button"
    );
    this.fieldConvertionLevel2 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr:nth-child(2)>td:nth-child(4)>div>input"
    );
    this.fieldLevel3 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr:nth-child(3)>td:nth-child(1)>button"
    );
    this.fieldUomLevel3 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr:nth-child(3)>td:nth-child(3)>button"
    );
    this.fieldConvertionLevel3 = page.locator(
      "div>section:nth-child(2)>div:nth-child(3)>div>table>tbody>tr:nth-child(3)>td:nth-child(4)>div>input"
    );
    this.buttonAddNewLevel = page.locator("tfoot>tr>td>div>button");

    this.tabAttributeVariant = page.locator(
      "main>div:nth-child(3)>button:nth-child(2)"
    );
    this.buttonAddNewAttribute = page.locator("tfoot>tr>td>div>button");
    this.fieldAttributeName = page.locator(
      "div>main>div:nth-child(4)>div:nth-child(1)>div>table>tbody>tr>td:nth-child(1)>button"
    );
    this.fieldValueAttributeName = page.locator(
      "div>main>div:nth-child(4)>div:nth-child(1)>div>table>tbody>tr>td:nth-child(2)>form>ul>li>div>input"
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
    await this.page.waitForLoadState("networkidle");
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1280, height: 1600 });
    await expect(this.page).toHaveScreenshot("listProduct.png", {
      maxDiffPixelRatio: 0.001,
      fullPage: true,
      timeout: 5000,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleProduct.textContent();
    await expect(actualText).toMatchSnapshot("titleProduct.txt");
  }

  async clickbuttonAddNew() {
    await this.buttonAddNew.click();
  }
  async inputsearchbar(text: any) {
    await this.searchbar.waitFor({ state: "visible" });
    await this.searchbar.fill(text);
  }

  // Table List
  async validateListCreatedProduct(payload: any) {
    await expect(this.rowProductID1).toContainText("MPD-");
    await expect(this.rowProductName1).toContainText(payload.productName);

    const receivedStringCost = await this.rowCost1.innerText();
    const cleanedValueStringCost = receivedStringCost.replace(/[^0-9]/g, "");
    const actualValueCost = parseInt(cleanedValueStringCost, 10).toString();
    await expect(actualValueCost).toEqual(payload.cost);

    const receivedStringBasePrice = await this.rowBasePrice1.innerText();
    const cleanedValueStringBasePrice = receivedStringBasePrice.replace(
      /[^0-9]/g,
      ""
    );
    const actualValueBasePrice = parseInt(
      cleanedValueStringBasePrice,
      10
    ).toString();
    await expect(actualValueBasePrice).toEqual(payload.basePrice);

    await expect(this.rowCategory1).toContainText(payload.category);
    const textViewDetail = await this.rowActions.textContent();
    await expect(textViewDetail).toMatchSnapshot("txtActionDetail.txt");
  }

  async inputfieldProductName(text: any) {
    await this.fieldProductName.fill(text);
  }
  async inputfieldProductType(text: any) {
    await this.fieldProductType.fill(text);
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId("option").first().click();
  }
  async inputfieldCategory(text: any) {
    await this.fieldCategory.fill(text);
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId("option").first().click();
  }
  async inputfieldProductBrand() {
    await this.fieldProductBrand.click();
    await this.page.getByTestId("option").first().click();
  }
  async inputfieldIndustry() {
    await this.fieldIndustry.click();
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId("option").first().click();
  }
  async inputfieldExternalCode(text: any) {
    await this.fieldExternalCode.fill(text);
  }
  async inputfieldCost(text: any) {
    await this.fieldCost.fill(text);
  }
  async inputfieldBasePrice(text: any) {
    await this.fieldBasePrice.fill(text);
  }
  async inputfieldBaseUom(text: any) {
    await this.fieldBaseUom.fill(text);
    await this.page.waitForTimeout(1000);
    await this.page.getByTestId("option").first().click();
  }
  async inputfieldLevel1(text: any) {
    await this.fieldLevel1.click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("option", { name: text }).first().click();
  }
  async inputfieldLevel2(text: any) {
    await this.fieldLevel2.click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("option", { name: text }).first().click();
  }
  async inputfieldUomLevel2(text: any) {
    await this.fieldUomLevel2.click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("option", { name: text }).first().click();
  }
  async inputfieldConvertionLevel2(text: any) {
    await this.fieldConvertionLevel2.fill(text);
  }
  async inputfieldLevel3(text: any) {
    await this.fieldLevel3.click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("option", { name: text }).first().click();
  }
  async inputfieldUomLevel3(text: any) {
    await this.fieldUomLevel3.click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole("option", { name: text }).first().click();
  }
  async inputfieldConvertionLevel3(text: any) {
    await this.fieldConvertionLevel3.fill(text);
  }
  async clickbuttonAddNewLevel() {
    await this.buttonAddNewLevel.click();
  }

  async clicktabAttributeVariant() {
    await this.tabAttributeVariant.click();
  }
  async clickbuttonAddNewAttribute() {
    await this.buttonAddNewAttribute.click();
  }
  async inputfieldAttributeName(text: any) {
    await this.fieldAttributeName.click();
    await this.page.getByRole("option", { name: text }).click();
  }
  async inputfieldValueAttributeName(text: any) {
    await this.fieldValueAttributeName.click();
    await this.fieldValueAttributeName.fill(text);
    await this.page.keyboard.press("Enter");
  }

  async clickbuttonSubmit() {
    await this.buttonSubmit.click();
  }
  async validatetoastMessage() {
    const message = await this.toastMessage.textContent();
    await expect(message).toMatchSnapshot("successMessageCreateProduct.txt");
  }
}
