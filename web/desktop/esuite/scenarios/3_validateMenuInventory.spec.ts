import { test } from "../pageObjects/Base.page";

const credentials = {
  companyId: "3399225",
  username: "regresfico1007",
  password: "Testing@123",
};

test.describe.only("Module Inventory", () => {
  test.beforeEach(
    async ({
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
    }
  );

  test("Validate Menu Submenu Inventory", async ({ page, inventoryPage }) => {
    // Modul Inventaris
    await inventoryPage.validatemodulInventaris("Inventaris");
    await inventoryPage.clickmodulInventaris();

    // Title Inventaris
    await inventoryPage.validatetitleInventaris("Inventaris");

    // Menu Produk
    await inventoryPage.validatemenuProduk("Produk");
    await inventoryPage.validatesubmenuProduk("Produk");
    await inventoryPage.validatesubmenuVarianProduk("Varian Produk");
    await inventoryPage.validatesubmenuProductCombo("Product Combo");
    await inventoryPage.validatesubmenuKategoriProduk("Kategori Produk");
    await inventoryPage.validatesubmenuMerekProduk("Merek Produk");
    await inventoryPage.validatesubmenuGroupProduk("Grup Produk");

    // Menu Manajemen Stok
    await inventoryPage.validatemenuManajemenStok("Manajemen Stok");
    await inventoryPage.validatesubmenuStok("Stok");
    await inventoryPage.validatesubmenuPenyesuaianStok("Penyesuaian Stok");
    await inventoryPage.validatesubmenuRiwayatStok("Riwayat Stok");
    await inventoryPage.validatesubmenuLaporanSaldoStok("Laporan Saldo Stok");

    // Perpindahan Stok
    await inventoryPage.validatemenuPerpindahanStok("Perpindahan Stok");
    await inventoryPage.validatesubmenuPenerimaanBarang("Penerimaan Barang");
    await inventoryPage.validatesubmenuPengiriman("Pengiriman");
    await inventoryPage.validatesubmenuShipment("Shipment");
    await inventoryPage.validatesubmenuInternalTransfer("Internal Transfer");
    await inventoryPage.validatesubmenuBadStock("Bad Stock");
    await inventoryPage.validatesubmenuDisposal("Disposal");

    // Canvassing
    await inventoryPage.validatemenuCanvassing("Canvassing");
    await inventoryPage.validatesubmenuCanvassBooking("Canvass Booking");

    // Konfigurasi
    await inventoryPage.validatemenuKonfigurasi("Konfigurasi");
    await inventoryPage.validatesubmenuLokasi("Lokasi");
    await inventoryPage.validatesubmenuGudang("Gudang");
    await inventoryPage.validatesubmenuKategoriUoM("Kategori UoM");
    await inventoryPage.validatesubmenuSatuanUkuran("Satuan Ukuran");
    await inventoryPage.validatesubmenuKendaraan("Kendaraan");
    await inventoryPage.validatesubmenuTipeKendaraan("Tipe Kendaraan");
  });
});
