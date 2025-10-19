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
  readonly deliveriesSubmenu: Locator;
  readonly shipmentSubmenu: Locator;
  readonly internalTransferSubmenu: Locator;
  readonly badStockSubmenu: Locator;
  readonly disposalSubmenu: Locator;

  // Canvassing
  readonly menuCanvassing: Locator;
  readonly canvassBookingSubmenu: Locator;

  // Konfigurasi
  readonly menuKonfigurasi: Locator;
  readonly locationSubmenu: Locator;
  readonly warehouseSubmenu: Locator;
  readonly uomCategorySubmenu: Locator;
  readonly uomSubmenu: Locator;
  readonly vehicleSubmenu: Locator;
  readonly vehicleTypeSubmenu: Locator;

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
    this.deliveriesSubmenu = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(2)"
    );
    this.shipmentSubmenu = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(3)"
    );
    this.internalTransferSubmenu = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(4)"
    );
    this.badStockSubmenu = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(5)"
    );
    this.disposalSubmenu = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(6)"
    );

    // Canvassing
    this.menuCanvassing = page.locator(
      "aside>div>div:nth-child(4)>h3>button>h5"
    );
    this.canvassBookingSubmenu = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(1)"
    );

    // Konfigurasi
    this.menuKonfigurasi = page.locator(
      "aside>div>div:nth-child(5)>h3>button>h5"
    );
    this.locationSubmenu = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(1)"
    );
    this.warehouseSubmenu = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(2)"
    );
    this.uomCategorySubmenu = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(3)"
    );
    this.uomSubmenu = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(4)"
    );
    this.vehicleSubmenu = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(5)"
    );
    this.vehicleTypeSubmenu = page.locator(
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
    await this.deliveriesSubmenu.waitFor({ state: "visible" });
    await this.shipmentSubmenu.waitFor({ state: "visible" });
    await this.internalTransferSubmenu.waitFor({ state: "visible" });
    await this.badStockSubmenu.waitFor({ state: "visible" });
    await this.disposalSubmenu.waitFor({ state: "visible" });

    // Canvassing
    await this.menuCanvassing.waitFor({ state: "visible" });
    await this.canvassBookingSubmenu.waitFor({ state: "visible" });

    // Konfigurasi
    await this.menuKonfigurasi.waitFor({ state: "visible" });
    await this.locationSubmenu.waitFor({ state: "visible" });
    await this.warehouseSubmenu.waitFor({ state: "visible" });
    await this.uomCategorySubmenu.waitFor({ state: "visible" });
    await this.uomSubmenu.waitFor({ state: "visible" });
    await this.vehicleSubmenu.waitFor({ state: "visible" });
    await this.vehicleTypeSubmenu.waitFor({ state: "visible" });
  }

  async clickgoodReceiptSubmenu() {
    await this.goodReceiptSubmenu.click();
  }
  async clickdeliveriesSubmenu() {
    await this.deliveriesSubmenu.click();
  }
  async clickshipmentSubmenu() {
    await this.shipmentSubmenu.click();
  }
  async clickinternalTransferSubmenu() {
    await this.internalTransferSubmenu.click();
  }
  async clickbadStockSubmenu() {
    await this.badStockSubmenu.click();
  }
  async clickdisposalSubmenu() {
    await this.disposalSubmenu.click();
  }
  async clickcanvassBookingSubmenu() {
    await this.canvassBookingSubmenu.click();
  }
  async clicklocationSubmenu() {
    await this.locationSubmenu.click();
  }
  async clickwarehouseSubmenu() {
    await this.warehouseSubmenu.click();
  }
  async clickuomCategorySubmenu() {
    await this.uomCategorySubmenu.click();
  }
  async clickuomSubmenu() {
    await this.uomSubmenu.click();
  }
  async clickvehicleSubmenu() {
    await this.vehicleSubmenu.click();
  }
  async clickvehicleTypeSubmenu() {
    await this.vehicleTypeSubmenu.click();
  }
}
