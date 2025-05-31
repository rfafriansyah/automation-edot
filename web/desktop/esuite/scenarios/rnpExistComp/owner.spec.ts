import { ownerExisting } from "../../../../../helper/esuite/credentials";
import { test } from "../../pageObjects/Base.page";

test.describe("RnP Esuite", () => {
  test.beforeEach(async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(ownerExisting.companyId);
    await loginPage.filltxtEmployeeIDUsername(ownerExisting.username);
    await loginPage.filltxtPassword(ownerExisting.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });

  test("Memastikan Owner dapat mengakses Overview Dashboard @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.validateEworkPage();
  });

  // Ework
  // Salesman Activity
  test("Memastikan Owner dapat mengakses Target & Achievement @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicktargetAndAchievement();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Target Outlet @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicktargetOutlet();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Attendance @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickattendance();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Live Tracking @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickliveTracking();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Salesman Division @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksalesmanDivision();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Salesman Visit @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksalesmanVisit();
    await eworkPage.validateBeAbleAccess();
  });

  // Call Plan
  test("Memastikan Owner dapat mengakses Call Plan Pattern @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcallPlanPattern();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Call Plan List @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcallPlanList();
    await eworkPage.validateBeAbleAccess();
  });

  // Customer Activity
  test("Memastikan Owner dapat mengakses Survey Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksurveyReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Stock Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickstockReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Competitor Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcompetitorReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Planogram Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickplanogramReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Annoucement @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickannouncement();
    await eworkPage.validateBeAbleAccess();
  });

  // Configuration
  test("Memastikan Owner dapat mengakses Brand Competitor @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickbrandCompetitor();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Owner dapat mengakses Detail Mechanism @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickdetailMechanism();
    await eworkPage.validateBeAbleAccess();
  });

  // Module Sales
  // Access Dashboard
  test("Memastikan Owner dapat mengakses Overview Dashboard @sales @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.validateBeAbleAccess();
  });

  // Order Management
  test("Memastikan Owner dapat mengakses Quotation @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickquotation();
    await salesPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Sales Order @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clicksalesOrder();
    await salesPage.validateBeAbleAccess();
  });

  // Customers
  test("Memastikan Owner dapat mengakses - Customers @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickcustomers();
    await salesPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses - Customer Group @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickcustomerGroup();
    await salesPage.validateBeAbleAccess();
  });

  // Stock Moves
  test("Memastikan Owner dapat mengakses Branch @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickbranch();
    await salesPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Region @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickregion();
    await salesPage.validateBeAbleAccess();
  });

  // Configuration
  test("Memastikan Owner dapat mengakses Pricelist @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickpricelist();
    await salesPage.validateBeAbleAccess();
  });

  // Module Inventory
  // Product
  test("Memastikan Owner dapat mengakses Products @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Product Variant @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductVariant();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Product Combo @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductCombo();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Product Category @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductCategory();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Product Brand @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductBrand();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Product Group @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductGroup();
    await inventoryPage.validateBeAbleAccess();
  });
  // Stock Management
  test("Memastikan Owner dapat mengakses Stocks @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickstocks();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Stocks Adjustment @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickstocksAdjustment();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Moves History @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickmovesHistory();
    await inventoryPage.validateBeAbleAccess();
  });
  // Stock Moves
  test("Memastikan Owner dapat mengakses Good Receipt @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickgoodReceipt();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Deliveries @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickdeliveries();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Internal Transfer @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickinternalTransfer();
    await inventoryPage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Owner dapat mengakses Location @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clicklocation();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Warehouse @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickwarehouse();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses UoM Category @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickuomCategory();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Unit of Measure @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickunitOfMeasure();
    await inventoryPage.validateBeAbleAccess();
  });

  // Module Finance
  // Finance
  test("Memastikan Owner dapat mengakses Invoices @finance @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Bills @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickbills();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Register Payment @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickregisterPayments();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Vendors @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickvendors();
    await financePage.validateBeAbleAccess();
  });
  // Tax
  test("Memastikan Owner dapat mengakses Taxes @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clicktaxes();
    await financePage.validateBeAbleAccess();
  });
  // Credit Limit
  test("Memastikan Owner dapat mengakses Approval @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickapproval();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Mutation @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickmutation();
    await financePage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Owner dapat mengakses Payment Method @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickpaymentMethod();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Credit Limit @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickcreditLimit();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Payment Provider @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickpaymentProvider();
    await financePage.validateBeAbleAccess();
  });

  // Module Marketing
  // Dashboard
  test("Memastikan Owner dapat mengakses Dashboard @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.validateBeAbleAccess();
  });
  // Promotions
  test("Memastikan Owner dapat mengakses Promotions @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickpromotions();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Promo Simulations @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickpromotionSimulation();
    await marketingPage.validateBeAbleAccess();
  });
  // Campaign
  test("Memastikan Owner dapat mengakses Campaign @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickcampaign();
    await marketingPage.validateBeAbleAccess();
  });
  // SKU Focus
  test("Memastikan Owner dapat mengakses SKU Recommendations @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickskuRecommendation();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Product Tags @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickproductTags();
    await marketingPage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Owner dapat mengakses Campaign Type @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickcampaignType();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Promotion Type @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickpromotionType();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Notifications @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clicknotification();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Benefit @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickbenefit();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Benefit Type @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickbenefitType();
    await marketingPage.validateBeAbleAccess();
  });

  // Module HR
  // Employee
  test("Memastikan Owner dapat mengakses Employees @hr @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Attendance @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickattendance();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Scheduler @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickscheduler();
    await hrPage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Owner dapat mengakses Departement @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickdepartment();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Job Position @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickjobPosition();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Shift @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickshift();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Owner dapat mengakses Holiday @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickholiday();
    await hrPage.validateBeAbleAccess();
  });
});
