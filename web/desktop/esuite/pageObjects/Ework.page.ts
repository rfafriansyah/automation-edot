import { Locator, Page, expect } from "@playwright/test";

export class EworkPage {
  readonly page: Page;

  // Modul ework
  readonly modulEwork: Locator;

  // Title ework
  readonly titleEwork: Locator;

  // Menu Dashboard
  readonly menuDashbor: Locator;
  readonly submenuRingkasan: Locator;

  // Menu Aktivitas Salesman
  readonly menuAktivitasSalesman: Locator;
  readonly submenuTargetPenghargaan: Locator;
  readonly submenuKehadiran: Locator;
  readonly submenuPelacakanLangsung: Locator;
  readonly submenuDivisiSalesman: Locator;
  readonly submenuKunjunganSalesman: Locator;

  // Menu Rencana Panggilan
  readonly menuRencanaPanggilan: Locator;
  readonly submenuPolaRencanaPanggilan: Locator;
  readonly submenuDaftarRencanaPanggilan: Locator;

  // Menu Aktivitas Pelanggan
  readonly menuAktivitasPelanggan: Locator;
  readonly submenuLaporanSurvei: Locator;
  readonly submenuLaporanStok: Locator;
  readonly submenuLaporanPesaing: Locator;
  readonly submenuLaporanPlanogram: Locator;
  readonly submenuPengumuman: Locator;

  // Menu Konfigurasi
  readonly menuKonfigurasi: Locator;
  readonly submenuKompetitorMerek: Locator;
  readonly submenuRincianMekanisme: Locator;

  constructor(page: Page) {
    this.page = page;

    // Modul ework
    this.modulEwork = page.locator(
      "body>header>section:nth-child(2)>ul>a:nth-child(1)>span"
    );

    // Title ework
    this.titleEwork = page.locator("aside>h1");

    // Menu Dashboard
    this.menuDashbor = page.locator("aside>div>div:nth-child(1)>h3>button>h5");
    this.submenuRingkasan = page.locator(
      "aside>div>div:nth-child(1)>div>ul>li>a"
    );

    // Menu Aktivitas Salesman
    this.menuAktivitasSalesman = page.locator(
      "aside>div>div:nth-child(2)>h3>button>h5"
    );
    this.submenuTargetPenghargaan = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(1)>a"
    );
    this.submenuKehadiran = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(2)>a"
    );
    this.submenuPelacakanLangsung = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(3)>a"
    );
    this.submenuDivisiSalesman = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(4)>a"
    );
    this.submenuKunjunganSalesman = page.locator(
      "aside>div>div:nth-child(2)>div>ul>li:nth-child(5)>a"
    );

    // Menu Rencana Panggilan
    this.menuRencanaPanggilan = page.locator(
      "aside>div>div:nth-child(3)>h3>button>h5"
    );
    this.submenuPolaRencanaPanggilan = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(1)>a"
    );
    this.submenuDaftarRencanaPanggilan = page.locator(
      "aside>div>div:nth-child(3)>div>ul>li:nth-child(2)>a"
    );

    // Menu Aktivitas Pelanggan
    this.menuAktivitasPelanggan = page.locator(
      "aside>div>div:nth-child(4)>h3>button>h5"
    );
    this.submenuLaporanSurvei = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(1)>a"
    );
    this.submenuLaporanStok = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(2)>a"
    );
    this.submenuLaporanPesaing = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(3)>a"
    );
    this.submenuLaporanPlanogram = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(4)>a"
    );
    this.submenuPengumuman = page.locator(
      "aside>div>div:nth-child(4)>div>ul>li:nth-child(5)>a"
    );

    // Menu Konfigurasi
    this.menuKonfigurasi = page.locator(
      "aside>div>div:nth-child(5)>h3>button>h5"
    );
    this.submenuKompetitorMerek = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(1)>a"
    );
    this.submenuRincianMekanisme = page.locator(
      "aside>div>div:nth-child(5)>div>ul>li:nth-child(2)>a"
    );
  }

  // Modul ework
  async validatemodulEwork(text: string) {
    await this.modulEwork.waitFor({ state: "visible" });
    await expect(this.modulEwork).toBeVisible();
    await expect(this.modulEwork).toHaveText(text);
  }

  // Klik Modul ework
  async clickmodulEwork(text: string) {
    await this.modulEwork.waitFor({ state: "visible" });
    await expect(this.modulEwork).toBeVisible();
    await this.modulEwork.click();
  }

  // Title ework
  async validatetitleEwork(text: string) {
    await this.titleEwork.waitFor({ state: "visible" });
    await expect(this.titleEwork).toBeVisible();
    await expect(this.titleEwork).toHaveText(text);
  }

  // Menu Dashboard
  async validatemenuDashbor(text: string) {
    await this.menuDashbor.waitFor({ state: "visible" });
    await expect(this.menuDashbor).toBeVisible();
    await expect(this.menuDashbor).toHaveText(text);
  }
  async validatesubmenuRingkasan(text: string) {
    await this.submenuRingkasan.waitFor({ state: "visible" });
    await expect(this.submenuRingkasan).toBeVisible();
    await expect(this.submenuRingkasan).toHaveText(text);
  }

  // Menu Aktivitas Salesman
  async validatemenuAktivitasSalesman(text: string) {
    await this.menuAktivitasSalesman.waitFor({ state: "visible" });
    await expect(this.menuAktivitasSalesman).toBeVisible();
    await expect(this.menuAktivitasSalesman).toHaveText(text);
  }
  async validatesubmenuTargetPenghargaan(text: string) {
    await this.submenuTargetPenghargaan.waitFor({ state: "visible" });
    await expect(this.submenuTargetPenghargaan).toBeVisible();
    await expect(this.submenuTargetPenghargaan).toHaveText(text);
  }
  async validatesubmenuKehadiran(text: string) {
    await this.submenuKehadiran.waitFor({ state: "visible" });
    await expect(this.submenuKehadiran).toBeVisible();
    await expect(this.submenuKehadiran).toHaveText(text);
  }
  async validatesubmenuPelacakanLangsung(text: string) {
    await this.submenuPelacakanLangsung.waitFor({ state: "visible" });
    await expect(this.submenuPelacakanLangsung).toBeVisible();
    await expect(this.submenuPelacakanLangsung).toHaveText(text);
  }
  async validatesubmenuDivisiSalesman(text: string) {
    await this.submenuDivisiSalesman.waitFor({ state: "visible" });
    await expect(this.submenuDivisiSalesman).toBeVisible();
    await expect(this.submenuDivisiSalesman).toHaveText(text);
  }
  async validatesubmenuKunjunganSalesman(text: string) {
    await this.submenuKunjunganSalesman.waitFor({ state: "visible" });
    await expect(this.submenuKunjunganSalesman).toBeVisible();
    await expect(this.submenuKunjunganSalesman).toHaveText(text);
  }

  // Menu Rencana Panggilan
  async validatemenuRencanaPanggilan(text: string) {
    await this.menuRencanaPanggilan.waitFor({ state: "visible" });
    await expect(this.menuRencanaPanggilan).toBeVisible();
    await expect(this.menuRencanaPanggilan).toHaveText(text);
  }
  async validatesubmenuPolaRencanaPanggilan(text: string) {
    await this.submenuPolaRencanaPanggilan.waitFor({ state: "visible" });
    await expect(this.submenuPolaRencanaPanggilan).toBeVisible();
    await expect(this.submenuPolaRencanaPanggilan).toHaveText(text);
  }
  async validatesubmenuDaftarRencanaPanggilan(text: string) {
    await this.submenuDaftarRencanaPanggilan.waitFor({ state: "visible" });
    await expect(this.submenuDaftarRencanaPanggilan).toBeVisible();
    await expect(this.submenuDaftarRencanaPanggilan).toHaveText(text);
  }

  // Menu Aktivitas Pelanggan
  async validatemenuAktivitasPelanggan(text: string) {
    await this.menuAktivitasPelanggan.waitFor({ state: "visible" });
    await expect(this.menuAktivitasPelanggan).toBeVisible();
    await expect(this.menuAktivitasPelanggan).toHaveText(text);
  }
  async validatesubmenuLaporanSurvei(text: string) {
    await this.submenuLaporanSurvei.waitFor({ state: "visible" });
    await expect(this.submenuLaporanSurvei).toBeVisible();
    await expect(this.submenuLaporanSurvei).toHaveText(text);
  }
  async validatesubmenuLaporanStok(text: string) {
    await this.submenuLaporanStok.waitFor({ state: "visible" });
    await expect(this.submenuLaporanStok).toBeVisible();
    await expect(this.submenuLaporanStok).toHaveText(text);
  }
  async validatesubmenuLaporanPesaing(text: string) {
    await this.submenuLaporanPesaing.waitFor({ state: "visible" });
    await expect(this.submenuLaporanPesaing).toBeVisible();
    await expect(this.submenuLaporanPesaing).toHaveText(text);
  }
  async validatesubmenuLaporanPlanogram(text: string) {
    await this.submenuLaporanPlanogram.waitFor({ state: "visible" });
    await expect(this.submenuLaporanPlanogram).toBeVisible();
    await expect(this.submenuLaporanPlanogram).toHaveText(text);
  }
  async validatesubmenuPengumuman(text: string) {
    await this.submenuPengumuman.waitFor({ state: "visible" });
    await expect(this.submenuPengumuman).toBeVisible();
    await expect(this.submenuPengumuman).toHaveText(text);
  }

  // Menu Konfigurasi
  async validatemenuKonfigurasi(text: string) {
    await this.menuKonfigurasi.waitFor({ state: "visible" });
    await expect(this.menuKonfigurasi).toBeVisible();
    await expect(this.menuKonfigurasi).toHaveText(text);
  }
  async validatesubmenuKompetitorMerek(text: string) {
    await this.submenuKompetitorMerek.waitFor({ state: "visible" });
    await expect(this.submenuKompetitorMerek).toBeVisible();
    await expect(this.submenuKompetitorMerek).toHaveText(text);
  }
  async validatesubmenuRincianMekanisme(text: string) {
    await this.submenuRincianMekanisme.waitFor({ state: "visible" });
    await expect(this.submenuRincianMekanisme).toBeVisible();
    await expect(this.submenuRincianMekanisme).toHaveText(text);
  }
}
