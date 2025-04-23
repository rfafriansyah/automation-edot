import { Locator, Page, expect } from "@playwright/test";

export class EworkPage {
  readonly page: Page;
  readonly headingEwork: Locator;

  // Menu Dashboard
  readonly menuDashboard: Locator;

  // Menu Aktivitas Salesman
  readonly menuAktivitasSalesman: Locator;

  // Menu Rencana Panggilan
  readonly menuRencanaPanggilan: Locator;

  // Menu Aktivitas Pelanggan
  readonly menuAktivitasPelanggan: Locator;

  // Menu Konfigurasi
  readonly menuKonfigurasi: Locator;


  constructor(page: Page) {
    this.page = page;
    this.headingEwork = page.getByRole('heading', { name: 'Ework' })

    this.menuDashboard = page.getByRole('button', { name: 'Dasbor' })
    this.menuAktivitasSalesman = page.getByRole('button', { name: 'Aktivitas Salesman' })
    this.menuRencanaPanggilan = page.getByRole('button', { name: 'Rencana Panggilan' })
    this.menuAktivitasPelanggan = page.getByRole('button', { name: 'Aktivitas Pelanggan' })
    this.menuKonfigurasi = page.getByRole('button', { name: 'Konfigurasi' })

  }

  async validateEworkPage() {
    await expect(this.headingEwork).toBeVisible()
    await expect(this.menuDashboard).toBeVisible()
    await expect(this.menuAktivitasSalesman).toBeVisible()
    await expect(this.menuRencanaPanggilan).toBeVisible()
    await expect(this.menuAktivitasPelanggan).toBeVisible()
    await expect(this.menuKonfigurasi).toBeVisible()
  }

}
