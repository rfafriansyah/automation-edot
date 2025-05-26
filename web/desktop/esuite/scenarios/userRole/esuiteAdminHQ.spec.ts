import { test } from "../../pageObjects/Base.page";

const credentials = {
  companyId: "3399227",
  username: "3399227_estadm1",
  password: "Rhama@123",
};

test.describe("RnP Esuite", () => {
  test.beforeEach(async ({ page, loginPage, eworkPage }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    await eworkPage.validateEworkPage();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Overview Dashboard @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.validateEworkPage();
  });

  // Ework
  // Salesman Activity
  test("Memastikan Esuite Admin HQ dapat mengakses Target & Achievement @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicktargetAndAchievement();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Target Outlet @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicktargetOutlet();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Attendance @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickattendance();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Live Tracking @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickliveTracking();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Salesman Division @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksalesmanDivision();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Salesman Visit @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksalesmanVisit();
    await eworkPage.validateBeAbleAccess();
  });

  // Call Plan
  test("Memastikan Esuite Admin HQ dapat mengakses Call Plan Pattern @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcallPlanPattern();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Call Plan List @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcallPlanList();
    await eworkPage.validateBeAbleAccess();
  });

  // Customer Activity
  test("Memastikan Esuite Admin HQ dapat mengakses Survey Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clicksurveyReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Stock Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickstockReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Competitor Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickcompetitorReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Planogram Report @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickplanogramReport();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Annoucement @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickannouncement();
    await eworkPage.validateBeAbleAccess();
  });

  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Brand Competitor @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickbrandCompetitor();
    await eworkPage.validateBeAbleAccess();
  });

  test("Memastikan Esuite Admin HQ dapat mengakses Detail Mechanism @ework @rhama.fahri", async ({
    eworkPage,
  }) => {
    await eworkPage.clickdetailMechanism();
    await eworkPage.validateBeAbleAccess();
  });

  // Module Sales
  // Access Dashboard
  test("Memastikan Esuite Admin HQ dapat mengakses Overview Dashboard @sales @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.validateBeAbleAccess();
  });

  // Order Management
  test("Memastikan Esuite Admin HQ dapat mengakses Quotation @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickquotation();
    await salesPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Sales Order @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clicksalesOrder();
    await salesPage.validateBeAbleAccess();
  });

  // Customers
  test("Memastikan Esuite Admin HQ dapat mengakses - Customers @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickcustomers();
    await salesPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses - Customer Group @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickcustomerGroup();
    await salesPage.validateBeAbleAccess();
  });

  // Stock Moves
  test("Memastikan Esuite Admin HQ dapat mengakses Branch @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickbranch();
    await salesPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Region @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickregion();
    await salesPage.validateBeAbleAccess();
  });

  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Pricelist @sales @rhama.fahri", async ({
    page,
    salesPage,
  }) => {
    await salesPage.clickmoduleSales();
    await salesPage.clickpricelist();
    await salesPage.validateBeAbleAccess();
  });

  // Module Inventory
  // Product
  test("Memastikan Esuite Admin HQ dapat mengakses Products @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Product Variant @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductVariant();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Product Combo @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductCombo();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Product Category @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductCategory();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Product Brand @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductBrand();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Product Group @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickproductGroup();
    await inventoryPage.validateBeAbleAccess();
  });
  // Stock Management
  test("Memastikan Esuite Admin HQ dapat mengakses Stocks @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickstocks();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Stocks Adjustment @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickstocksAdjustment();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Moves History @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickmovesHistory();
    await inventoryPage.validateBeAbleAccess();
  });
  // Stock Moves
  test("Memastikan Esuite Admin HQ dapat mengakses Good Receipt @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickgoodReceipt();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Deliveries @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickdeliveries();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Internal Transfer @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickinternalTransfer();
    await inventoryPage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Location @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clicklocation();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Warehouse @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickwarehouse();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses UoM Category @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickuomCategory();
    await inventoryPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Unit of Measure @inventory @rhama.fahri", async ({
    page,
    inventoryPage,
  }) => {
    await inventoryPage.clickmoduleInventory();
    await inventoryPage.clickunitOfMeasure();
    await inventoryPage.validateBeAbleAccess();
  });

  // Module Finance
  // Finance
  test("Memastikan Esuite Admin HQ dapat mengakses Invoices @finance @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Bills @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickbills();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Register Payment @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickregisterPayments();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Vendors @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickvendors();
    await financePage.validateBeAbleAccess();
  });
  // Tax
  test("Memastikan Esuite Admin HQ dapat mengakses Taxes @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clicktaxes();
    await financePage.validateBeAbleAccess();
  });
  // Credit Limit
  test("Memastikan Esuite Admin HQ dapat mengakses Approval @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickapproval();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Mutation @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickmutation();
    await financePage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Payment Method @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickpaymentMethod();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Credit Limit @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickcreditLimit();
    await financePage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Payment Provider @finance @rhama.fahri", async ({
    page,
    financePage,
  }) => {
    await financePage.clickmoduleFinance();
    await financePage.clickpaymentProvider();
    await financePage.validateBeAbleAccess();
  });

  // Module Marketing
  // Dashboard
  test("Memastikan Esuite Admin HQ dapat mengakses Dashboard @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.validateBeAbleAccess();
  });
  // Promotions
  test("Memastikan Esuite Admin HQ dapat mengakses Promotions @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickpromotions();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Promo Simulations @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickpromotionSimulation();
    await marketingPage.validateBeAbleAccess();
  });
  // Campaign
  test("Memastikan Esuite Admin HQ dapat mengakses Campaign @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickcampaign();
    await marketingPage.validateBeAbleAccess();
  });
  // SKU Focus
  test("Memastikan Esuite Admin HQ dapat mengakses SKU Recommendations @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickskuRecommendation();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Product Tags @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickproductTags();
    await marketingPage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Campaign Type @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickcampaignType();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Promotion Type @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickpromotionType();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Notifications @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clicknotification();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Benefit @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickbenefit();
    await marketingPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Benefit Type @marketing @rhama.fahri", async ({
    page,
    marketingPage,
  }) => {
    await marketingPage.clickmoduleMarketing();
    await marketingPage.clickbenefitType();
    await marketingPage.validateBeAbleAccess();
  });

  // Module HR
  // Employee
  test("Memastikan Esuite Admin HQ dapat mengakses Employees @hr @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Attendance @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickattendance();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Scheduler @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickscheduler();
    await hrPage.validateBeAbleAccess();
  });
  // Configuration
  test("Memastikan Esuite Admin HQ dapat mengakses Departement @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickdepartment();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Job Position @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickjobPosition();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Shift @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickshift();
    await hrPage.validateBeAbleAccess();
  });
  test("Memastikan Esuite Admin HQ dapat mengakses Holiday @hr @rhama.fahri", async ({
    page,
    hrPage,
  }) => {
    await hrPage.clickmoduleHRPage();
    await hrPage.clickholiday();
    await hrPage.validateBeAbleAccess();
  });
});
