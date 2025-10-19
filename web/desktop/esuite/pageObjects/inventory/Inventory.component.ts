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
  readonly goodReceiptSubmenu: Locator;
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
    this.goodReceiptSubmenu = page.locator(
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

  async validateMenuSubmenuInventory() {
    // Menu Produk
    await this.menuProduk.waitFor({ state: "visible" });
    await this.submenuProduk.waitFor({ state: "visible" });
    await this.submenuVarianProduk.waitFor({ state: "visible" });
    await this.submenuProductCombo.waitFor({ state: "visible" });
    await this.submenuKategoriProduk.waitFor({ state: "visible" });
    await this.submenuMerekProduk.waitFor({ state: "visible" });
    await this.submenuGroupProduk.waitFor({ state: "visible" });

    // Menu Manajemen Stok
    await this.menuManajemenStok.waitFor({ state: "visible" });
    await this.submenuStok.waitFor({ state: "visible" });
    await this.submenuPenyesuaianStok.waitFor({ state: "visible" });
    await this.submenuRiwayatStok.waitFor({ state: "visible" });
    await this.submenuLaporanSaldoStok.waitFor({ state: "visible" });

    // Perpindahan Stok
    await this.menuPerpindahanStok.waitFor({ state: "visible" });
    await this.goodReceiptSubmenu.waitFor({ state: "visible" });
    await this.submenuPengiriman.waitFor({ state: "visible" });
    await this.submenuShipment.waitFor({ state: "visible" });
    await this.submenuInternalTransfer.waitFor({ state: "visible" });
    await this.submenuBadStock.waitFor({ state: "visible" });
    await this.submenuDisposal.waitFor({ state: "visible" });

    // Canvassing
    await this.menuCanvassing.waitFor({ state: "visible" });
    await this.submenuCanvassBooking.waitFor({ state: "visible" });

    // Konfigurasi
    await this.menuKonfigurasi.waitFor({ state: "visible" });
    await this.submenuLokasi.waitFor({ state: "visible" });
    await this.submenuGudang.waitFor({ state: "visible" });
    await this.submenuKategoriUoM.waitFor({ state: "visible" });
    await this.submenuSatuanUkuran.waitFor({ state: "visible" });
    await this.submenuKendaraan.waitFor({ state: "visible" });
    await this.submenuTipeKendaraan.waitFor({ state: "visible" });
  }

  async clickgoodReceiptSubmenu() {
    await this.goodReceiptSubmenu.click();
  }
}
