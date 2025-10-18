import { test as base } from "@playwright/test";
import { LoginPage } from "./Login.page";
import { EworkPage } from "./Ework.page";
import { EmitraPage } from "./Emitra.page";
import { SalesPage } from "./Sales.page";
import { InventoryPage } from "./Inventory.page";
import { FinancePage } from "./Finance.page";
import { MarketingPage } from "./Marketing.page";
import { HRPage } from "./HR.page";

type MyFixtures = {
  loginPage: LoginPage;
  eworkPage: EworkPage;
  emitraPage: EmitraPage;
  salesPage: SalesPage;
  inventoryPage: InventoryPage;
  financePage: FinancePage;
  marketingPage: MarketingPage;
  hrPage: HRPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  eworkPage: async ({ page }, use) => {
    await use(new EworkPage(page));
  },
  emitraPage: async ({ page }, use) => {
    await use(new EmitraPage(page));
  },
  salesPage: async ({ page }, use) => {
    await use(new SalesPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  financePage: async ({ page }, use) => {
    await use(new FinancePage(page));
  },
  marketingPage: async ({ page }, use) => {
    await use(new MarketingPage(page));
  },
  hrPage: async ({ page }, use) => {
    await use(new HRPage(page));
  },
});

export { expect } from "@playwright/test";
