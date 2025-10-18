import { Locator, Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  // Modul Inventaris
  readonly modulInventaris: Locator;
  // Title Inventaris
  readonly titleInventaris: Locator;

  // Menu Produk
  readonly menuProduk: Locator;
  readonly submenuProduk: Locator;
  readonly submenuVarianProduk: Locator;
  readonly submenuProductCombo: Locator;
  readonly submenuKategoriProduk: Locator;
  readonly submenuMerekProduk: Locator;
  readonly submenuGroupProduk: Locator;

  // Menu Manajemen Stok
  readonly menuManajemenStok: Locator;
  readonly submenuStok: Locator;
  readonly submenuPenyesuaianStok: Locator;
  readonly submenuRiwayatStok: Locator;
  readonly submenuLaporanSaldoStok: Locator;

  // Perpindahan Stok
  readonly menuPerpindahanStok: Locator;
  readonly submenuPenerimaanBarang: Locator;
  readonly submenuPengiriman: Locator;
  readonly submenuShipment: Locator;
  readonly submenuInternalTransfer: Locator;
  readonly submenuBadStock: Locator;
  readonly submenuDisposal: Locator;

  // Canvassing
  readonly menuCanvassing: Locator;
  readonly submenuCanvassBooking: Locator;

  // Konfigurasi
  readonly menuKonfigurasi: Locator;
  readonly submenuLokasi: Locator;
  readonly submenuGudang: Locator;
  readonly submenuKategoriUoM: Locator;
  readonly submenuSatuanUkuran: Locator;
  readonly submenuKendaraan: Locator;
  readonly submenuTipeKendaraan: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul Inventaris
    this.modulInventaris = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(4)"
    );
    // Title Inventaris
    this.titleInventaris = page.locator("aside>h1");

    // Menu Produk
    this.menuProduk = page.locator("aside>div>div:nth-child(1)>h3>button>h5");
    this.submenuProduk = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(1)"
    );
    this.submenuVarianProduk = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(2)"
    );
    this.submenuProductCombo = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(3)"
    );
    this.submenuKategoriProduk = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(4)"
    );
    this.submenuMerekProduk = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(5)"
    );
    this.submenuGroupProduk = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li:nth-child(6)"
    );

    // Menu Manajemen Stok
    this.menuManajemenStok = page.locator(
      "aside>div>div:nth-child(2)>h3>button>h5"
    );
    this.submenuStok = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(1)"
    );
    this.submenuPenyesuaianStok = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(2)"
    );
    this.submenuRiwayatStok = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(3)"
    );
    this.submenuLaporanSaldoStok = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(4)"
    );

    // Perpindahan Stok
    this.menuPerpindahanStok = page.locator(
      "aside>div>div:nth-child(3)>h3>button>h5"
    );
    this.submenuPenerimaanBarang = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(1)"
    );
    this.submenuPengiriman = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(2)"
    );
    this.submenuShipment = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(3)"
    );
    this.submenuInternalTransfer = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(4)"
    );
    this.submenuBadStock = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(5)"
    );
    this.submenuDisposal = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(6)"
    );

    // Canvassing
    this.menuCanvassing = page.locator(
      "aside>div>div:nth-child(4)>h3>button>h5"
    );
    this.submenuCanvassBooking = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(1)"
    );

    // Konfigurasi
    this.menuKonfigurasi = page.locator(
      "aside>div>div:nth-child(5)>h3>button>h5"
    );
    this.submenuLokasi = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(1)"
    );
    this.submenuGudang = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(2)"
    );
    this.submenuKategoriUoM = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(3)"
    );
    this.submenuSatuanUkuran = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(4)"
    );
    this.submenuKendaraan = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(5)"
    );
    this.submenuTipeKendaraan = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(6)"
    );
  }

  // Validate Modul Inventaris
  async validatemodulInventaris(text: string) {
    await this.modulInventaris.waitFor({ state: "visible" });
    await expect(this.modulInventaris).toBeVisible();
    await expect(this.modulInventaris).toHaveText(text);
  }

  // Modul Inventaris
  async clickmodulInventaris() {
    await this.modulInventaris.waitFor({ state: "visible" });
    await expect(this.modulInventaris).toBeVisible();
    await this.modulInventaris.click();
  }

  // Validate Title Inventaris
  async validatetitleInventaris(text: string) {
    await this.titleInventaris.waitFor({ state: "visible" });
    await expect(this.titleInventaris).toBeVisible();
    await expect(this.titleInventaris).toHaveText(text);
  }

  // Validate Menu Produk
  async validatemenuProduk(text: string) {
    await this.menuProduk.waitFor({ state: "visible" });
    await expect(this.menuProduk).toBeVisible();
    await expect(this.menuProduk).toHaveText(text);
  }
  async validatesubmenuProduk(text: string) {
    await this.submenuProduk.waitFor({ state: "visible" });
    await expect(this.submenuProduk).toBeVisible();
    await expect(this.submenuProduk).toHaveText(text);
  }
  async validatesubmenuVarianProduk(text: string) {
    await this.submenuVarianProduk.waitFor({ state: "visible" });
    await expect(this.submenuVarianProduk).toBeVisible();
    await expect(this.submenuVarianProduk).toHaveText(text);
  }
  async validatesubmenuProductCombo(text: string) {
    await this.submenuProductCombo.waitFor({ state: "visible" });
    await expect(this.submenuProductCombo).toBeVisible();
    await expect(this.submenuProductCombo).toHaveText(text);
  }
  async validatesubmenuKategoriProduk(text: string) {
    await this.submenuKategoriProduk.waitFor({ state: "visible" });
    await expect(this.submenuKategoriProduk).toBeVisible();
    await expect(this.submenuKategoriProduk).toHaveText(text);
  }
  async validatesubmenuMerekProduk(text: string) {
    await this.submenuMerekProduk.waitFor({ state: "visible" });
    await expect(this.submenuMerekProduk).toBeVisible();
    await expect(this.submenuMerekProduk).toHaveText(text);
  }
  async validatesubmenuGroupProduk(text: string) {
    await this.submenuGroupProduk.waitFor({ state: "visible" });
    await expect(this.submenuGroupProduk).toBeVisible();
    await expect(this.submenuGroupProduk).toHaveText(text);
  }

  // Validate Menu Manajemen Stok
  async validatemenuManajemenStok(text: string) {
    await this.menuManajemenStok.waitFor({ state: "visible" });
    await expect(this.menuManajemenStok).toBeVisible();
    await expect(this.menuManajemenStok).toHaveText(text);
  }
  async validatesubmenuStok(text: string) {
    await this.submenuStok.waitFor({ state: "visible" });
    await expect(this.submenuStok).toBeVisible();
    await expect(this.submenuStok).toHaveText(text);
  }
  async validatesubmenuPenyesuaianStok(text: string) {
    await this.submenuPenyesuaianStok.waitFor({ state: "visible" });
    await expect(this.submenuPenyesuaianStok).toBeVisible();
    await expect(this.submenuPenyesuaianStok).toHaveText(text);
  }
  async validatesubmenuRiwayatStok(text: string) {
    await this.submenuRiwayatStok.waitFor({ state: "visible" });
    await expect(this.submenuRiwayatStok).toBeVisible();
    await expect(this.submenuRiwayatStok).toHaveText(text);
  }
  async validatesubmenuLaporanSaldoStok(text: string) {
    await this.submenuLaporanSaldoStok.waitFor({ state: "visible" });
    await expect(this.submenuLaporanSaldoStok).toBeVisible();
    await expect(this.submenuLaporanSaldoStok).toHaveText(text);
  }

  // Validate Perpindahan Stok
  async validatemenuPerpindahanStok(text: string) {
    await this.menuPerpindahanStok.waitFor({ state: "visible" });
    await expect(this.menuPerpindahanStok).toBeVisible();
    await expect(this.menuPerpindahanStok).toHaveText(text);
  }
  async validatesubmenuPenerimaanBarang(text: string) {
    await this.submenuPenerimaanBarang.waitFor({ state: "visible" });
    await expect(this.submenuPenerimaanBarang).toBeVisible();
    await expect(this.submenuPenerimaanBarang).toHaveText(text);
  }
  async validatesubmenuPengiriman(text: string) {
    await this.submenuPengiriman.waitFor({ state: "visible" });
    await expect(this.submenuPengiriman).toBeVisible();
    await expect(this.submenuPengiriman).toHaveText(text);
  }
  async validatesubmenuShipment(text: string) {
    await this.submenuShipment.waitFor({ state: "visible" });
    await expect(this.submenuShipment).toBeVisible();
    await expect(this.submenuShipment).toHaveText(text);
  }
  async validatesubmenuInternalTransfer(text: string) {
    await this.submenuInternalTransfer.waitFor({ state: "visible" });
    await expect(this.submenuInternalTransfer).toBeVisible();
    await expect(this.submenuInternalTransfer).toHaveText(text);
  }
  async validatesubmenuBadStock(text: string) {
    await this.submenuBadStock.waitFor({ state: "visible" });
    await expect(this.submenuBadStock).toBeVisible();
    await expect(this.submenuBadStock).toHaveText(text);
  }
  async validatesubmenuDisposal(text: string) {
    await this.submenuDisposal.waitFor({ state: "visible" });
    await expect(this.submenuDisposal).toBeVisible();
    await expect(this.submenuDisposal).toHaveText(text);
  }

  // Validate Canvassing
  async validatemenuCanvassing(text: string) {
    await this.menuCanvassing.waitFor({ state: "visible" });
    await expect(this.menuCanvassing).toBeVisible();
    await expect(this.menuCanvassing).toHaveText(text);
  }
  async validatesubmenuCanvassBooking(text: string) {
    await this.submenuCanvassBooking.waitFor({ state: "visible" });
    await expect(this.submenuCanvassBooking).toBeVisible();
    await expect(this.submenuCanvassBooking).toHaveText(text);
  }

  // Validate Konfigurasi
  async validatemenuKonfigurasi(text: string) {
    await this.menuKonfigurasi.waitFor({ state: "visible" });
    await expect(this.menuKonfigurasi).toBeVisible();
    await expect(this.menuKonfigurasi).toHaveText(text);
  }
  async validatesubmenuLokasi(text: string) {
    await this.submenuLokasi.waitFor({ state: "visible" });
    await expect(this.submenuLokasi).toBeVisible();
    await expect(this.submenuLokasi).toHaveText(text);
  }
  async validatesubmenuGudang(text: string) {
    await this.submenuGudang.waitFor({ state: "visible" });
    await expect(this.submenuGudang).toBeVisible();
    await expect(this.submenuGudang).toHaveText(text);
  }
  async validatesubmenuKategoriUoM(text: string) {
    await this.submenuKategoriUoM.waitFor({ state: "visible" });
    await expect(this.submenuKategoriUoM).toBeVisible();
    await expect(this.submenuKategoriUoM).toHaveText(text);
  }
  async validatesubmenuSatuanUkuran(text: string) {
    await this.submenuSatuanUkuran.waitFor({ state: "visible" });
    await expect(this.submenuSatuanUkuran).toBeVisible();
    await expect(this.submenuSatuanUkuran).toHaveText(text);
  }
  async validatesubmenuKendaraan(text: string) {
    await this.submenuKendaraan.waitFor({ state: "visible" });
    await expect(this.submenuKendaraan).toBeVisible();
    await expect(this.submenuKendaraan).toHaveText(text);
  }
  async validatesubmenuTipeKendaraan(text: string) {
    await this.submenuTipeKendaraan.waitFor({ state: "visible" });
    await expect(this.submenuTipeKendaraan).toBeVisible();
    await expect(this.submenuTipeKendaraan).toHaveText(text);
  }
}
