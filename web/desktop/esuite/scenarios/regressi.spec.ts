import { test } from "../pageObjects/Base.page";
import {
  payloadBranch,
  payloadCustomers,
  payloadWarehouse,
  payloadProduct,
  payloadStockAdjustment,
  payloadGoodReceipt,
  payloadDeliveries,
} from "./payloadRegressi";

import {
  credentialsProd,
  credentialsStagingExisting,
} from "../payload/credentials";

const credentials = credentialsProd;

test.describe.serial.only("Regressi Testing esuite", () => {
  test.beforeEach(async ({ page, loginPage, headerComponent, salesPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await headerComponent.validateAllModulesVisible();
  });

  test("As a user be able to Create Branch", async ({
    page,
    branchPage,
    salesPage,
    headerComponent,
  }) => {
    await headerComponent.clickmoduleSales();
    await salesPage.clickSubmenuBranch();
    await branchPage.createBranch(payloadBranch.branch1);
    await branchPage.createBranch(payloadBranch.branch2);
    await branchPage.createBranch(payloadBranch.branch3);
    await branchPage.createBranch(payloadBranch.branch4);
    await branchPage.createBranch(payloadBranch.branch5);
  });

  test("As a user be able to Create Customers", async ({
    page,
    customersPage,
    salesPage,
    headerComponent,
  }) => {
    await headerComponent.clickmoduleSales();
    await salesPage.clickSubmenuCustomers();
    await customersPage.createCustomers(payloadCustomers.customers1);
    await customersPage.createCustomers(payloadCustomers.customers2);
    await customersPage.createCustomers(payloadCustomers.customers3);
    await customersPage.createCustomers(payloadCustomers.customers4);
    await customersPage.createCustomers(payloadCustomers.customers5);
  });

  test("As a user be able to Create Warehouse", async ({
    page,
    warehouseSubmenuPage,
    inventoryPage,
    headerComponent,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuWarehouse();
    await warehouseSubmenuPage.createWarehouse(payloadWarehouse.warehouse1);
    await warehouseSubmenuPage.createWarehouse(payloadWarehouse.warehouse2);
    await warehouseSubmenuPage.createWarehouse(payloadWarehouse.warehouse3);
    await warehouseSubmenuPage.createWarehouse(payloadWarehouse.warehouse4);
    await warehouseSubmenuPage.createWarehouse(payloadWarehouse.warehouse5);
  });

  test("As a user be able to Create Products", async ({
    page,
    productSubmenuPage,
    inventoryPage,
    headerComponent,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuProduct();
    await productSubmenuPage.createProduct(payloadProduct.product1);
    await productSubmenuPage.createProduct(payloadProduct.product2);
    await productSubmenuPage.createProduct(payloadProduct.product3);
    await productSubmenuPage.createProduct(payloadProduct.product4);
    await productSubmenuPage.createProduct(payloadProduct.product5);
    await productSubmenuPage.createProduct(payloadProduct.product6);
    await productSubmenuPage.createProduct(payloadProduct.product7);
    await productSubmenuPage.createProduct(payloadProduct.product8);
    await productSubmenuPage.createProduct(payloadProduct.product9);
    await productSubmenuPage.createProduct(payloadProduct.product10);
  });

  test("As a user be able to Create Stocks (Variant X)", async ({
    page,
    stocksAdjustmentSubmenuPage,
    headerComponent,
    inventoryPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuStocksAdjustment();

    // Create stock variant X
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock1
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock2
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock3
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock4
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock5
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock6
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock7
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock8
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock9
    );
    await stocksAdjustmentSubmenuPage.createStockVariantX(
      payloadStockAdjustment.stock10
    );
  });

  test("As a user be able to Create Stocks (Variant Y)", async ({
    page,
    stocksAdjustmentSubmenuPage,
    headerComponent,
    inventoryPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuStocksAdjustment();

    // Create stock variant y
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock1
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock2
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock3
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock4
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock5
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock6
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock7
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock8
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock9
    );
    await stocksAdjustmentSubmenuPage.createStockVariantY(
      payloadStockAdjustment.stock10
    );
  });

  test("As a user be able to Create Stocks (Variant Z)", async ({
    page,
    stocksAdjustmentSubmenuPage,
    headerComponent,
    inventoryPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuStocksAdjustment();

    // Create stock variant Z
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock1
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock2
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock3
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock4
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock5
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock6
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock7
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock8
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock9
    );
    await stocksAdjustmentSubmenuPage.createStockVariantZ(
      payloadStockAdjustment.stock10
    );
  });

  test("As a user be able to Create Good Receipt (Validate)", async ({
    page,
    customersPage,
    salesPage,
    headerComponent,
    inventoryPage,
    goodReceiptSubmenuPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuGoodReceipt();
    await goodReceiptSubmenuPage.createGoodReceipt(payloadGoodReceipt);
    await goodReceiptSubmenuPage.clickValidateGR();
  });

  test("As a user be able to Create Good Receipt (Mark as To Do -> Check Availability -> Validate)", async ({
    page,
    customersPage,
    salesPage,
    headerComponent,
    inventoryPage,
    goodReceiptSubmenuPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuGoodReceipt();
    await goodReceiptSubmenuPage.createGoodReceipt(payloadGoodReceipt);
    await goodReceiptSubmenuPage.clickMarkastodoGR();
    await goodReceiptSubmenuPage.clickCheckAvailability();
    await goodReceiptSubmenuPage.clickValidateGR();
  });

  test("As a user be able to Create Good Receipt (Mark as To Do -> Validate)", async ({
    page,
    customersPage,
    salesPage,
    headerComponent,
    inventoryPage,
    goodReceiptSubmenuPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuGoodReceipt();
    await goodReceiptSubmenuPage.createGoodReceipt(payloadGoodReceipt);
    await goodReceiptSubmenuPage.clickMarkastodoGR();
    await goodReceiptSubmenuPage.clickValidateGR();
  });

  test("As a user be able to Create Deliveries (Mark to do -> Check Availability -> Validate)", async ({
    page,
    customersPage,
    salesPage,
    headerComponent,
    inventoryPage,
    deliveriesSubmenuPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuDeliveries();
    await deliveriesSubmenuPage.createDeliveries(payloadDeliveries);
    await deliveriesSubmenuPage.clickButtonMarkToDo();
    await deliveriesSubmenuPage.clickButtonCheckAvailability();
    await deliveriesSubmenuPage.clickButtonValidate();
  });

  test("As a user be able to Create Deliveries (Mark to do -> Validate)", async ({
    page,
    customersPage,
    salesPage,
    headerComponent,
    inventoryPage,
    deliveriesSubmenuPage,
  }) => {
    await headerComponent.clickmoduleInventory();
    await inventoryPage.clicksubmenuDeliveries();
    await deliveriesSubmenuPage.createDeliveries(payloadDeliveries);
    await deliveriesSubmenuPage.clickButtonMarkToDo();
    await deliveriesSubmenuPage.clickButtonValidate();
  });
});
