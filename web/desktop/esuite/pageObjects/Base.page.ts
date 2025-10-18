import { test as base } from "@playwright/test";
import { LoginPage } from "./Login.page";
import { EworkPage } from "./Ework.page";
import { EmitraPage } from "./Emitra.page";
import { SalesPage } from "./Sales.page";
import { FinancePage } from "./Finance.page";
import { MarketingPage } from "./Marketing.page";
import { HRPage } from "./HR.page";
import { ProductSubmenuPage } from "./inventory/ProductSubmenu.page";
import { ProductVariantSubmenuPage } from "./inventory/productVariantSubmenu.page";
import { HeaderComponent } from "./Header.component";
import { productCategorySubmenuPage } from "./inventory/productCategorySubmenu.page";
import { ProductBrandSubmenuPage } from "./inventory/productBrandSubmenu.page";
import { ProductGroupSubmenuPage } from "./inventory/productGroupSubmenu.page";
import { StocksSubmenuPage } from "./inventory/stocksSubmenu.page";
import { StocksAdjustmentSubmenuPage } from "./inventory/stocksAdjusmentSubmenu.page";
import { MoveHistorySubmenuPage } from "./inventory/moveHistorySubmenu.page";
import { StockBalanceReportSubmenuPage } from "./inventory/stockBalanceReport.page";

type MyFixtures = {
  loginPage: LoginPage;

  headerComponent: HeaderComponent;

  // Ework
  eworkPage: EworkPage;

  // Emitra
  emitraPage: EmitraPage;

  // Sales
  salesPage: SalesPage;

  // Inventory
  productSubmenuPage: ProductSubmenuPage;
  productVariantSubmenuPage: ProductVariantSubmenuPage;
  productCategorySubmenuPage: productCategorySubmenuPage;
  productBrandSubmenuPage: ProductBrandSubmenuPage;
  productGroupSubmenuPage: ProductGroupSubmenuPage;
  stocksSubmenuPage: StocksSubmenuPage;
  stocksAdjustmentSubmenuPage: StocksAdjustmentSubmenuPage;
  moveHistorySubmenuPage: MoveHistorySubmenuPage;
  stockBalanceReportSubmenuPage: StockBalanceReportSubmenuPage;

  // Finance
  financePage: FinancePage;

  // Marketing
  marketingPage: MarketingPage;

  // HR
  hrPage: HRPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page));
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

  // Product
  productSubmenuPage: async ({ page }, use) => {
    await use(new ProductSubmenuPage(page));
  },
  productVariantSubmenuPage: async ({ page }, use) => {
    await use(new ProductVariantSubmenuPage(page));
  },
  productCategorySubmenuPage: async ({ page }, use) => {
    await use(new productCategorySubmenuPage(page));
  },
  productBrandSubmenuPage: async ({ page }, use) => {
    await use(new ProductBrandSubmenuPage(page));
  },
  productGroupSubmenuPage: async ({ page }, use) => {
    await use(new ProductGroupSubmenuPage(page));
  },
  stocksSubmenuPage: async ({ page }, use) => {
    await use(new StocksSubmenuPage(page));
  },
  stocksAdjustmentSubmenuPage: async ({ page }, use) => {
    await use(new StocksAdjustmentSubmenuPage(page));
  },
  moveHistorySubmenuPage: async ({ page }, use) => {
    await use(new MoveHistorySubmenuPage(page));
  },
  stockBalanceReportSubmenuPage: async ({ page }, use) => {
    await use(new StockBalanceReportSubmenuPage(page));
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
