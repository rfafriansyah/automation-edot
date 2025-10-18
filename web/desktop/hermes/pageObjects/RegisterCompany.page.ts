import { Locator, Page, expect } from "@playwright/test";

export class RegisterCompanyPage {
  readonly page: Page;
  readonly txtCompanyName: Locator;
  readonly txtEmail: Locator;
  readonly txtPhone: Locator;
  readonly drpdwnIndustryType: Locator;
  readonly drpdwnCompanyType: Locator;
  readonly drpdwnLanguage: Locator;
  readonly txtStreetAddress: Locator;
  readonly drpdwnCountry: Locator;

  // if select Country: Indonesia
  readonly drpdwnProvince: Locator;
  readonly drpdwnCity: Locator;
  readonly drpdwnDistrict: Locator;
  readonly drpdwnSubDisctrict: Locator;
  // if select Country: Malaysia
  readonly drpdwnState: Locator;
  readonly drpdwnLocation: Locator;
  readonly drpdwnPostalCode: Locator;
  // if select Country: Philippine
  readonly drpdwnRegion: Locator;
  readonly drpdwnBarangay: Locator;

  readonly txtBranchName: Locator;
  readonly buttonFillTheSameDataRecords: Locator;
  readonly checkboxPolicyAndTNC: Locator;

  readonly buttonNext: Locator;
  readonly buttonRegister: Locator;
  readonly toastStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtCompanyName = page.getByRole("textbox", {
      name: "Input Company Name",
    });
    this.txtEmail = page.getByRole("textbox", { name: "Input Email" });
    this.txtPhone = page.getByRole("textbox", { name: "Input Phone" });
    this.drpdwnIndustryType = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Industry Type" });
    this.drpdwnCompanyType = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Company Type" });
    this.drpdwnLanguage = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Language" });
    this.txtStreetAddress = page.getByRole("textbox", {
      name: "Input Address",
    });
    this.drpdwnCountry = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Country" });

    // Country: Indonesia
    this.drpdwnProvince = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Province" });
    this.drpdwnCity = page
      .getByRole("combobox")
      .filter({ hasText: "Choose City" });
    this.drpdwnDistrict = page
      .getByRole("combobox")
      .filter({ hasText: "Choose District" });
    this.drpdwnSubDisctrict = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Sub District" });
    // Country: Malaysia
    this.drpdwnState = page
      .getByRole("combobox")
      .filter({ hasText: "Choose State" });
    this.drpdwnLocation = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Location" });
    this.drpdwnPostalCode = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Postal Code" });
    // Country: Philippine
    this.drpdwnRegion = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Region" });
    this.drpdwnBarangay = page
      .getByRole("combobox")
      .filter({ hasText: "Choose Barangay" });

    this.txtBranchName = page.getByRole("textbox", {
      name: "Input Branch Name",
    });
    this.buttonFillTheSameDataRecords = page.getByRole("button", {
      name: "Fill in with the same data",
    });
    this.checkboxPolicyAndTNC = page.locator("#select-all");

    this.buttonNext = page.getByRole("button", { name: "Next" });
    this.buttonRegister = page.getByRole("button", { name: "Register" });
    this.toastStatus = page.getByRole("listitem");
  }

  // Page 1: Register Company
  async filltxtCompanyName(companyName: any) {
    await this.txtCompanyName.fill(companyName);
  }
  async filltxtEmail(email: any) {
    await this.txtEmail.fill(email);
  }
  async filltxtPhone(phone: any) {
    await this.txtPhone.fill(phone);
  }
  async selectdrpdwnIndustryType() {
    await this.drpdwnIndustryType.click();
    await this.page.getByRole("option", { name: "Education" }).click();
  }
  async selectdrpdwnCompanyType() {
    await this.drpdwnCompanyType.click();
    await this.page.getByText("Marketplace").click();
  }
  async selectdrpdwnLanguage() {
    await this.drpdwnLanguage.click();
    await this.page.getByText("English").click();
  }
  async filltxtStreetAddress(address: any) {
    await this.txtStreetAddress.fill(address);
  }
  async selectdrpdwnCountry(country: any) {
    await this.drpdwnCountry.click();
    await this.page.getByLabel("Suggestions").getByText(country).click();
  }

  async selectdrpdwnProvince(province: any) {
    await this.drpdwnProvince.click();
    await this.page.getByRole("option", { name: province }).click();
  }
  async selectdrpdwnCity(city: any) {
    await this.drpdwnCity.click();
    await this.page.getByRole("option", { name: city }).click();
  }
  async selectdrpdwnDistrict(district: any) {
    await this.drpdwnDistrict.click();
    await this.page.getByRole("option", { name: district }).click();
  }
  async selectdrpdwnSubDisctrict(subDisctrict: any) {
    await this.drpdwnSubDisctrict.click();
    await this.page.getByRole("option", { name: subDisctrict }).click();
  }
  async selectdrpdwnState(state: any) {
    await this.drpdwnState.click();
    await this.page.getByRole("option", { name: state }).click();
  }
  async selectdrpdwnLocation(location: any) {
    await this.drpdwnLocation.click();
    await this.page.getByRole("option", { name: location }).click();
  }
  async selectdrpdwnPostalCode(postalCode: any) {
    await this.drpdwnPostalCode.click();
    await this.page.getByRole("option", { name: postalCode }).click();
  }
  async selectdrpdwnRegion(region: any) {
    await this.drpdwnRegion.click();
    await this.page.getByRole("option", { name: region }).click();
  }
  async selectdrpdwnBarangay(barangay: any) {
    await this.drpdwnBarangay.click();
    await this.page.getByRole("option", { name: barangay }).click();
  }

  // Country: Indonesia
  async fillCountryIndonesia(dataIndonesia: any) {
    await this.selectdrpdwnProvince(dataIndonesia.province);
    await this.selectdrpdwnCity(dataIndonesia.city);
    await this.selectdrpdwnDistrict(dataIndonesia.district);
    await this.selectdrpdwnSubDisctrict(dataIndonesia.subdistrict);
  }
  // Country: Malaysia
  async fillCountryMalaysia(dataMalaysia: any) {
    await this.selectdrpdwnState(dataMalaysia.state);
    await this.selectdrpdwnCity(dataMalaysia.city);
    await this.selectdrpdwnLocation(dataMalaysia.location);
    await this.selectdrpdwnPostalCode(dataMalaysia.postalCode);
  }
  // Country: Philippine
  async fillCountryPhilippine(dataPhilippine: any) {
    await this.selectdrpdwnRegion(dataPhilippine.region);
    await this.selectdrpdwnProvince(dataPhilippine.province);
    await this.selectdrpdwnCity(dataPhilippine.city);
    await this.selectdrpdwnBarangay(dataPhilippine.bangaray);
  }

  async filltxtBranchName(branch: any) {
    await this.txtBranchName.fill(branch);
  }

  async clickbuttonFillTheSameDataRecords() {
    await this.buttonFillTheSameDataRecords.click();
  }

  async checkcheckboxPolicyAndTNC() {
    await this.checkboxPolicyAndTNC.check();
  }

  async clickbuttonNext() {
    await this.buttonNext.click();
  }

  async clickbuttonRegister() {
    await this.buttonRegister.click();
  }

  async verifytoastStatus() {
    // await this.toastStatus.waitFor({ state: 'visible' })
    await expect(this.toastStatus).toContainText("Success Register Company");
  }
}
