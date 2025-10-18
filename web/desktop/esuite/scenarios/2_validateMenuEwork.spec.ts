import { test } from "../pageObjects/Base.page";

const credentials = {
  companyId: "3399225",
  username: "regresfico1007",
  password: "Testing@123",
};

test.describe("Module Ework", () => {
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

  test("Validate Menu Submenu Ework", async ({ page, eworkPage }) => {
    // Validate Modul Ework
    await eworkPage.validatemodulEwork("ework");

    // Validate Title Ework
    await eworkPage.validatetitleEwork("ework");

    // Validate Menu Dashbor
    await eworkPage.validatemenuDashbor("Dasbor");
    await eworkPage.validatesubmenuRingkasan("Ringkasan");

    // Validate Menu Aktivitas Salesman
    await eworkPage.validatemenuAktivitasSalesman("Aktivitas Salesman");
    await eworkPage.validatesubmenuTargetPenghargaan("Target & Penghargaan");
    await eworkPage.validatesubmenuKehadiran("Kehadiran");
    await eworkPage.validatesubmenuPelacakanLangsung("Pelacakan Langsung");
    await eworkPage.validatesubmenuDivisiSalesman("Divisi Salesman");
    await eworkPage.validatesubmenuKunjunganSalesman("Kunjungan Salesman");

    // Validate Menu Rencana Panggilan
    await eworkPage.validatemenuRencanaPanggilan("Rencana Panggilan");
    await eworkPage.validatesubmenuPolaRencanaPanggilan(
      "Pola Rencana Panggilan"
    );
    await eworkPage.validatesubmenuDaftarRencanaPanggilan(
      "Daftar Rencana Panggilan"
    );

    // Validate Aktivitas Pelanggan
    await eworkPage.validatemenuAktivitasPelanggan("Aktivitas Pelanggan");
    await eworkPage.validatesubmenuLaporanSurvei("Laporan Survei");
    await eworkPage.validatesubmenuLaporanStok("Laporan Stok");
    await eworkPage.validatesubmenuLaporanPesaing("Laporan Pesaing");
    await eworkPage.validatesubmenuLaporanPlanogram("Laporan Planogram");
    await eworkPage.validatesubmenuPengumuman("Pengumuman");

    // Validate Konfigurasi
    await eworkPage.validatemenuKonfigurasi("Konfigurasi");
    await eworkPage.validatesubmenuKompetitorMerek("Kompetitor Merek");
    await eworkPage.validatesubmenuRincianMekanisme("Rincian Mekanisme");
  });
});
