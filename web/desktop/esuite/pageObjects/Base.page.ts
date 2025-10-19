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
import { InventoryPage } from "./inventory/Inventory.component";
import { GoodReceiptSubmenuPage } from "./inventory/goodReceiptSubmenu.page";
import { DeliveriesSubmenuPage } from "./inventory/deliveriesSubmenu.page";
import { ShipmentSubmenuPage } from "./inventory/shipmentSubmenu.page";
import { InternalTransferSubmenuPage } from "./inventory/internalTransferSubmenu.page";
import { BadStockSubmenuPage } from "./inventory/badStockSubmenu.page";
import { DisposalSubmenuPage } from "./inventory/disposalSubmenu.page";
import { CanvassBookingSubmenuPage } from "./inventory/canvassBookingSubmenu.page";
import { LocationSubmenuPage } from "./inventory/locationSubmenu.page";
import { WarehouseSubmenuPage } from "./inventory/warehouseSubmenu.page";
import { UomCategorySubmenuPage } from "./inventory/uomCategorySubmenu.page";
import { UomSubmenuPage } from "./inventory/uom.page";
import { VehicleSubmenuPage } from "./inventory/vehicleSubmenu.page";
import { VehicleTypeSubmenuPage } from "./inventory/vehicleTypeSubmenu.page";

type MyFixtures = {
  loginPage: LoginPage;

  headerComponent: HeaderComponent;
  inventoryPage: InventoryPage;

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
  goodReceiptSubmenuPage: GoodReceiptSubmenuPage;
  deliveriesSubmenuPage: DeliveriesSubmenuPage;
  shipmentSubmenuPage: ShipmentSubmenuPage;
  internalTransferSubmenuPage: InternalTransferSubmenuPage;
  badStockSubmenuPage: BadStockSubmenuPage;
  disposalSubmenuPage: DisposalSubmenuPage;
  canvassBookingSubmenuPage: CanvassBookingSubmenuPage;
  locationSubmenuPage: LocationSubmenuPage;
  warehouseSubmenuPage: WarehouseSubmenuPage;
  uomCategorySubmenuPage: UomCategorySubmenuPage;
  uomSubmenuPage: UomSubmenuPage;
  vehicleSubmenuPage: VehicleSubmenuPage;
  vehicleTypeSubmenuPage: VehicleTypeSubmenuPage;

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
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
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
  goodReceiptSubmenuPage: async ({ page }, use) => {
    await use(new GoodReceiptSubmenuPage(page));
  },
  deliveriesSubmenuPage: async ({ page }, use) => {
    await use(new DeliveriesSubmenuPage(page));
  },
  shipmentSubmenuPage: async ({ page }, use) => {
    await use(new ShipmentSubmenuPage(page));
  },
  internalTransferSubmenuPage: async ({ page }, use) => {
    await use(new InternalTransferSubmenuPage(page));
  },
  badStockSubmenuPage: async ({ page }, use) => {
    await use(new BadStockSubmenuPage(page));
  },
  disposalSubmenuPage: async ({ page }, use) => {
    await use(new DisposalSubmenuPage(page));
  },
  canvassBookingSubmenuPage: async ({ page }, use) => {
    await use(new CanvassBookingSubmenuPage(page));
  },
  locationSubmenuPage: async ({ page }, use) => {
    await use(new LocationSubmenuPage(page));
  },
  warehouseSubmenuPage: async ({ page }, use) => {
    await use(new WarehouseSubmenuPage(page));
  },
  uomCategorySubmenuPage: async ({ page }, use) => {
    await use(new UomCategorySubmenuPage(page));
  },
  uomSubmenuPage: async ({ page }, use) => {
    await use(new UomSubmenuPage(page));
  },
  vehicleSubmenuPage: async ({ page }, use) => {
    await use(new VehicleSubmenuPage(page));
  },
  vehicleTypeSubmenuPage: async ({ page }, use) => {
    await use(new VehicleTypeSubmenuPage(page));
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
