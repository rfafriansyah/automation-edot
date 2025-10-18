import { test } from "../pageObjects/Base.page";

const credentials = {
  companyId: "3399225",
  username: "regresfico1007",
  password: "Testing@123",
};

test.describe("LOGIN", () => {
  test("User ke halaman Login Esuitre", async ({
    page,
    loginPage,
    eworkPage,
    emitraPage,
    salesPage,
    inventoryPage,
    financePage,
    marketingPage,
    hrPage,
  }) => {
    await loginPage.open();
    await loginPage.filltxtCompanyID(credentials.companyId);
    await loginPage.filltxtEmployeeIDUsername(credentials.username);
    await loginPage.filltxtPassword(credentials.password);
    await loginPage.clickbuttonLogin();
    // Validate Modul
    await eworkPage.validatemenuDashbor("Dasbor");
    await emitraPage.validatekmodulEmitra("emitra");
    await salesPage.validatemodulPenjualan("Penjualan");
    await inventoryPage.validatemodulInventaris("Inventaris");
    await financePage.validatemodulFinance("Keuangan");
    await marketingPage.validatemodulPemasaran("Pemasaran");
    await hrPage.validatemodulHR("HR");
  });
});
