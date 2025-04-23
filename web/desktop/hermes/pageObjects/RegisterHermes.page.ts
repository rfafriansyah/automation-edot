import { Locator, Page, expect } from "@playwright/test";

export class RegisterHermesPage {
  readonly page: Page;
  readonly txtEmail: Locator
  readonly buttonNext: Locator
  readonly buttonNext2: Locator
  readonly txtFullName: Locator
  readonly txtUsername: Locator
  readonly txtPassword: Locator
  readonly buttonregister: Locator

  readonly txtHoldingName: Locator
  readonly txtPhone: Locator
  readonly dropdownIndustryType: Locator
  readonly dropdownCompanyType: Locator
  readonly dropdownCountry: Locator
  readonly dropdownNumberOfEmployee: Locator
  readonly buttonRegisterAccount: Locator

  readonly txtCompanyName: Locator
  readonly txtStreetAddress: Locator
  readonly drpdwnCountry: Locator
  // if select Country: Indonesia
  readonly drpdwnProvince: Locator
  readonly drpdwnCity: Locator
  readonly drpdwnDistrict: Locator
  readonly drpdwnSubDisctrict: Locator

  readonly buttonFillTheSameDataRecords: Locator
  readonly checkboxPolicyAndTNC: Locator
  readonly toastStatus: Locator

  readonly txtBranchName: Locator


  constructor(page: Page) {
    this.page = page;
    this.txtEmail = page.getByRole('textbox', { name: 'Input Email' })
    this.buttonNext = page.getByRole('button', { name: 'Next' }).first()
    this.buttonNext2 = page.getByRole('button', { name: 'Next' }).nth(1)
    this.txtFullName = page.getByRole('textbox', { name: 'Input Full Name' })
    this.txtPassword = page.getByRole('textbox', { name: 'Input Password' })
    this.buttonregister = page.getByRole('button', { name: 'Register' })

    this.txtHoldingName = page.getByRole('textbox', { name: 'Input Holding Name' })
    this.txtPhone = page.getByRole('textbox', { name: 'Input Phone' })
    this.dropdownIndustryType = page.getByRole('combobox').filter({ hasText: 'Choose Industry Type' })
    this.dropdownCompanyType = page.getByRole('combobox').filter({ hasText: 'Choose Company Type' })
    this.dropdownCountry = page.getByRole('combobox').filter({ hasText: 'Choose Country' })
    this.dropdownNumberOfEmployee = page.getByRole('combobox').filter({ hasText: 'Choose Number of Employee' })
    this.buttonRegisterAccount = page.getByRole('button', { name: 'Register Account' })

    this.txtCompanyName = page.getByRole('textbox', { name: 'Input Company Name' })
    this.txtStreetAddress = page.getByRole('textbox', { name: 'Input Address' })
    this.drpdwnCountry = page.getByRole('combobox').filter({ hasText: 'Choose Country' })

    // Country: Indonesia
    this.drpdwnProvince = page.getByRole('combobox').filter({ hasText: 'Choose Province' })
    this.drpdwnCity = page.getByRole('combobox').filter({ hasText: 'Choose City' })
    this.drpdwnDistrict = page.getByRole('combobox').filter({ hasText: 'Choose District' })
    this.drpdwnSubDisctrict = page.getByRole('combobox').filter({ hasText: 'Choose Sub District' })

    this.txtBranchName = page.getByRole('textbox', { name: 'Input Branch Name' })

    this.buttonFillTheSameDataRecords = page.getByRole('button', { name: 'Fill in with the same data' })
    this.checkboxPolicyAndTNC = page.locator('#select-all')

    this.toastStatus = page.getByRole('status')
  }

  async filltxtEmail(input: any) {
    await this.txtEmail.fill(input)
  }
  async clickbuttonNext() {
    await this.buttonNext.click()
  }
  async clickbuttonNext2() {
    await this.buttonNext2.click()
  }
  async filltxtFullName(fullName: any) {
    await this.txtFullName.fill(fullName)
  }
  async filltxtpassword(password: any) {
    await this.txtPassword.fill(password)
  }
  async clickbuttonRegister() {
    await this.buttonregister.click()
  }

  async filltxtHoldingName(holdingName: any) {
    await this.txtHoldingName.fill(holdingName)
  }
  async filltxtPhone(phone: any) {
    await this.txtPhone.fill(`62${phone}`)
  }
  async selectdropdownIndustryType() {
    await this.page.getByRole('combobox').filter({ hasText: 'Choose Industry Type' }).click();
    await this.page.getByText('Healthcare').click();
  }
  async selectdropdownCompanyType() {
    await this.page.getByRole('combobox').filter({ hasText: 'Choose Company Type' }).click();
    await this.page.getByText('Retailer').click();
  }
  async selectdrpdwnCountry() {
    await this.page.getByRole('combobox').filter({ hasText: 'Choose Country' }).click();
    await this.page.getByText('Indonesia').click();
  }
  async selectdrpdwnNumberOfEmployee() {
    await this.dropdownNumberOfEmployee.click()
    await this.page.getByText('- 250 Employees').click();
  }
  async clickbuttonRegisterAccount() {
    await this.buttonRegisterAccount.click()
  }

  async filltxtCompanyName(companyName: any) {
    await this.txtCompanyName.fill(companyName)
  }
  async filltxtStreetAddress(streetAddress: any) {
    await this.txtStreetAddress.fill(streetAddress)
  }

  async selectdrpdwnProvince(province: any) {
    await this.drpdwnProvince.click()
    await this.page.getByRole('option', { name: province }).click();
  }
  async selectdrpdwnCity(city: any) {
    await this.drpdwnCity.click()
    await this.page.getByRole('option', { name: city }).click();
  }
  async selectdrpdwnDistrict(district: any) {
    await this.drpdwnDistrict.click()
    await this.page.getByRole('option', { name: district }).click();
  }
  async selectdrpdwnSubDisctrict(subDisctrict: any) {
    await this.drpdwnSubDisctrict.click()
    await this.page.getByRole('option', { name: subDisctrict }).click();
  }
  // Country: Indonesia
  async fillCountryIndonesia(dataIndonesia: any) {
    await this.selectdrpdwnProvince(dataIndonesia.province)
    await this.selectdrpdwnCity(dataIndonesia.city)
    await this.selectdrpdwnDistrict(dataIndonesia.district)
    await this.selectdrpdwnSubDisctrict(dataIndonesia.subdistrict)
  }

  async filltxtBranchName(branchName: any) {
    await this.txtBranchName.fill(branchName)
  }
  async clickbuttonFillTheSameDataRecords() {
    await this.buttonFillTheSameDataRecords.click()
  }
  async checkcheckboxPolicyAndTNC() {
    await this.checkboxPolicyAndTNC.check()
  }

  async verifytoastStatus() {
    await this.toastStatus.waitFor({ state: 'visible' })
    await expect(this.toastStatus).toHaveText('Success Register Company')
  }
}
