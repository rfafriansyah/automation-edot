import { Locator, Page, expect } from "@playwright/test";
import { HeaderComponent } from "../Header.component";

export class DeliveriesSubmenuPage {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  readonly titleDeliveries: Locator;

  readonly maskingtableBody: Locator;
  readonly maskingpagination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(page);

    this.titleDeliveries = page.locator("main>header>div:nth-child(1)>h2");

    this.maskingtableBody = page.locator("main>section>div>table>tbody");
    this.maskingpagination = page.locator(
      "main>header>div:nth-child(3)>div>div"
    );
  }

  async screenshotListPage() {
    await this.maskingtableBody.waitFor({ state: "visible" });
    await this.page.setViewportSize({ width: 1700, height: 1500 });
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveScreenshot("listDeliveries.png", {
      maxDiffPixelRatio: 0.05,
      fullPage: true,
      mask: [
        this.headerComponent.maskingProfileUser,
        this.maskingtableBody,
        this.maskingpagination,
      ],
    });
    const actualText = await this.titleDeliveries.textContent();
    await expect(actualText).toMatchSnapshot("titleDeliveries.txt");
  }

  async createDeliveries(payload: any) {
    await this.page.getByRole("link", { name: "Add New" }).click();
    // select delivery to
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Choose Delivery To" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Delivery To..." })
      .fill(payload.deliveryTo);
    await this.page
      .getByRole("option", { name: payload.deliveryTo })
      .first()
      .click();
    // select schedule date
    await this.page
      .locator("section")
      .filter({ hasText: "Delivery To*Customer" })
      .getByTestId("date-picker")
      .click();
    await this.page
      .getByRole("gridcell", { name: payload.scheduleDate })
      .nth(1)
      .click();
    // source location
    await this.page
      .getByRole("combobox")
      .filter({ hasText: "Source Location" })
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Choose Source Location" })
      .fill(payload.sourceLocation);
    await this.page
      .getByText(`Good Stock - ${payload.sourceLocation}`)
      .first()
      .click();

    // added field product
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

    // fill product 1
    await this.page
      .locator(`tbody>tr:nth-child(1)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product1);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product1} (X)` })
      .first()
      .click();

    // fill product 2
    await this.page
      .locator(`tbody>tr:nth-child(2)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product1);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product1} (Y)` })
      .first()
      .click();

    // fill product 3
    await this.page
      .locator(`tbody>tr:nth-child(3)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product2);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product2} (X)` })
      .first()
      .click();

    // fill product 4
    await this.page
      .locator(`tbody>tr:nth-child(4)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product2);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product2} (Y)` })
      .first()
      .click();

    // fill product 5
    await this.page
      .locator(`tbody>tr:nth-child(5)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product3);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product3} (X)` })
      .first()
      .click();

    // fill product 6
    await this.page
      .locator(`tbody>tr:nth-child(6)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product3);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product3} (Y)` })
      .first()
      .click();

    // fill product 7
    await this.page
      .locator(`tbody>tr:nth-child(7)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product4);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product4} (X)` })
      .first()
      .click();

    // fill product 8
    await this.page
      .locator(`tbody>tr:nth-child(8)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product4);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product4} (Y)` })
      .first()
      .click();

    // fill product 9
    await this.page
      .locator(`tbody>tr:nth-child(9)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product5);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product5} (X)` })
      .first()
      .click();

    // fill product 10
    await this.page
      .locator(`tbody>tr:nth-child(10)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product5);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product5} (Y)` })
      .first()
      .click();

    // fill product 11
    await this.page
      .locator(`tbody>tr:nth-child(11)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product6);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product6} (X)` })
      .first()
      .click();

    // fill product 12
    await this.page
      .locator(`tbody>tr:nth-child(12)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product6);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product6} (Y)` })
      .first()
      .click();

    // fill product 13
    await this.page
      .locator(`tbody>tr:nth-child(13)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product7);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product7} (X)` })
      .first()
      .click();

    // fill product 14
    await this.page
      .locator(`tbody>tr:nth-child(14)>td:nth-child(1)>button`)
      .click();
    await this.page
      .getByRole("textbox", { name: "Search Product" })
      .fill(payload.product7);
    await this.page.waitForTimeout(500);
    await this.page
      .getByRole("option", { name: `${payload.product7} (Y)` })
      .first()
      .click();

    // fill demand
    await this.page
      .locator(`tbody>tr:nth-child(1)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(2)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(3)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(4)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(5)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(6)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(7)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(8)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(9)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(10)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(11)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(12)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(13)>td:nth-child(2)>div>input`)
      .fill(payload.demand);
    await this.page
      .locator(`tbody>tr:nth-child(14)>td:nth-child(2)>div>input`)
      .fill(payload.demand);

    // fill uom
    await this.page.locator(`tbody>tr:nth-child(1)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(2)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(3)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(4)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(5)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(6)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(7)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(8)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(9)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(10)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(11)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(12)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(13)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();
    await this.page.locator(`tbody>tr:nth-child(14)>td:nth-child(5)`).click();
    await this.page.getByRole("option", { name: payload.uom }).first().click();

    await this.page.getByRole("button", { name: "Submit" }).click();
    await this.page.waitForTimeout(1000);

    // fill quantity
    await this.page
      .locator(`tbody>tr:nth-child(1)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(2)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(3)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(4)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(5)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(6)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(7)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(8)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(9)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(10)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(11)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(12)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(13)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
    await this.page
      .locator(`tbody>tr:nth-child(14)>td:nth-child(5)>div>input`)
      .fill(payload.quantity);
  }

  async clickButtonMarkToDo() {
    await this.page.getByRole("button", { name: "Mark as To-Do" }).click();
  }

  async clickButtonCheckAvailability() {
    await this.page.getByRole("button", { name: "Check Availability" }).click();
  }

  async clickButtonValidate() {
    await this.page.getByRole("button", { name: "Validate" }).click();
  }
}
