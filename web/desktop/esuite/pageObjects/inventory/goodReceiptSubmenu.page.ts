import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class GoodReceiptSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleGoodReceipt: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleGoodReceipt = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 2000, height: 1500 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listGoodReceipt.png", {
      maxDiffPixelRatio: 0.05,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleGoodReceipt.textContent();
    await expect(actualText).toMatchSnapshot("titleGoodReceipt.txt");
  }

  async createGoodReceipt(payload: any) {
    // click add new
    await this.page.getByRole("link", { name: "Add New" }).click();
    // fill receive from
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Receive From" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Receive From" })
      .fill(payload.receiveFrom);
    await this.page
      .getByRole("option")
      .getByText(payload.receiveFrom)
      .first()
      .click();
    // choose schedule date
    await this.page
      .locator("section")
      .filter({ hasText: "Receive From*Customer Branch" })
      .getByTestId("date-picker")
      .click();
    await this.page
      .getByRole("gridcell", { name: payload.scheduleDate })
      .nth(1)
      .click();
    // choose location destination
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Location Destination" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Location Destination..." })
      .fill(payload.locationDestination);
    await this.page
      .getByText(`Good Stock - ${payload.locationDestination}`)
      .first()
      .click();
    // choose product 1
    // await this.page
    //   .getByRole("combobox")
    //   .filter({ hasText: /^Choose Product$/ })
    //   .click();
    // await this.page
    //   .getByRole("textbox", { name: "Search Product..." })
    //   .fill(payload.product1);
    // await this.page.getByRole("option", { name: payload.product1 }).click();
    // await this.page
    //   .getByRole("combobox")
    //   .filter({ hasText: "Select UoM" })
    //   .click();
    // await this.page.getByRole("option", { name: "Units" }).click();
    // await this.page.getByRole("textbox", { name: "0" }).fill("20");
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();
    await this.page.getByRole("button", { name: "Add New Product" }).click();

    // Fill Product 1
    await this.page
      .locator("tbody>tr:nth-child(1)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product1} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product1 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(1)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);

    // Fill Product 2
    await this.page
      .locator("tbody>tr:nth-child(2)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product1} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product1 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(2)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);

    // Fill Product 3
    await this.page
      .locator("tbody>tr:nth-child(3)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product2} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product2 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(3)>td:nth-child(5)>div>input`)
      .fill(payload.demand2);

    // Fill Product 4
    await this.page
      .locator("tbody>tr:nth-child(4)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product2} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product2 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(4)>td:nth-child(5)>div>input`)
      .fill(payload.demand2);

    // Fill Product 5
    await this.page
      .locator("tbody>tr:nth-child(5)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product3} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product3 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(5)>td:nth-child(5)>div>input`)
      .fill(payload.demand3);

    // Fill Product 6
    await this.page
      .locator("tbody>tr:nth-child(6)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product3} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product3 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(6)>td:nth-child(5)>div>input`)
      .fill(payload.demand3);

    // Fill Product 7
    await this.page
      .locator("tbody>tr:nth-child(7)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product4} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product4 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(7)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 8
    await this.page
      .locator("tbody>tr:nth-child(8)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product4} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product4 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(8)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 9
    await this.page
      .locator("tbody>tr:nth-child(9)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product5} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product5 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(9)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 10
    await this.page
      .locator("tbody>tr:nth-child(10)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product5} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product5 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(10)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 11
    await this.page
      .locator("tbody>tr:nth-child(11)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product6} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product6 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(11)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 12
    await this.page
      .locator("tbody>tr:nth-child(12)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product6} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product6 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(12)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 13
    await this.page
      .locator("tbody>tr:nth-child(13)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product7} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product7 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(13)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 14
    await this.page
      .locator("tbody>tr:nth-child(14)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product7} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product7 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(14)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 15
    await this.page
      .locator("tbody>tr:nth-child(15)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product8} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product8 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(15)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 16
    await this.page
      .locator("tbody>tr:nth-child(16)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product8} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product8 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(16)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 17
    await this.page
      .locator("tbody>tr:nth-child(17)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product9} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product9 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(17)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 18
    await this.page
      .locator("tbody>tr:nth-child(18)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product9} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product9 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(18)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 19
    await this.page
      .locator("tbody>tr:nth-child(19)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product10} (X)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product10 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(19)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    // Fill Product 20
    await this.page
      .locator("tbody>tr:nth-child(20)>td:nth-child(1)>button")
      .click();
    await this.page.getByRole("textbox", { name: "Search Product..." }).click();
    await this.page
      .getByRole("textbox", { name: "Search Product..." })
      .fill(`${payload.product10} (Y)`);
    await this.page.waitForTimeout(1000);
    await this.page
      .getByRole("option", { name: payload.product10 })
      .first()
      .click();
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Select UoM" })
      .click();
    await this.page.getByRole("option", { name: "Units" }).click();
    await this.page
      .locator(`tbody>tr:nth-child(20)>td:nth-child(5)>div>input`)
      .fill(payload.demand4);

    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.getByText("Create goods receipt success").isVisible();
    await this.page.waitForTimeout(1000);
    // fill quantity
    await this.page
      .locator(`tbody>tr:nth-child(1)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(2)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(3)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(4)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(5)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(6)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(7)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(8)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(9)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(10)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(11)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(12)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(13)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(14)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(15)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(16)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(17)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(18)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(19)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
    await this.page
      .locator(`tbody>tr:nth-child(20)>td:nth-child(5)>div>input`)
      .fill(payload.demand1);
  }

  async clickValidateGR() {
    await this.page.getByRole("button", { name: "Validate" }).click();
  }

  async clickMarkastodoGR() {
    await this.page.getByRole("button", { name: "Mark as To-Do" }).click();
  }

  async clickCheckAvailability() {
    await this.page.getByRole("button", { name: "Check Availability" }).click();
  }
}
