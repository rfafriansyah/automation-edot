import { test } from "../pageObjects/Base.page";
import { payloadLogin, payloadCreateIndonesia, payloadCreateMalaysia, payloadCreatePhilippine } from '../../../../helper/payloadHermes'


test.describe.only("Create New Company on Hermes - Positive", () => {
  test.beforeEach(async ({ page, loginPage, navbarPage, companiesPage }) => {

    await loginPage.open();
    await loginPage.clickbuttonEmailUsername()
    await loginPage.filltxtEmailUsername(payloadLogin().username)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(payloadLogin().password)
    await loginPage.clickbuttonLogin()
    await navbarPage.clickbuttonCompanies()
    await companiesPage.clickbuttonAddCompany()
  });

  test("Create new Company, Country: Indonesia", async ({ registerCompanyPage }) => {

    await registerCompanyPage.filltxtCompanyName(payloadCreateIndonesia().companyNameIndo)
    await registerCompanyPage.filltxtEmail(payloadCreateIndonesia().emailIndo)
    await registerCompanyPage.filltxtPhone(payloadCreateIndonesia().phoneIndo)
    await registerCompanyPage.selectdrpdwnIndustryType()
    await registerCompanyPage.selectdrpdwnCompanyType()
    await registerCompanyPage.selectdrpdwnLanguage()
    await registerCompanyPage.filltxtStreetAddress(payloadCreateIndonesia().addressIndo)

    await registerCompanyPage.selectdrpdwnCountry(payloadCreateIndonesia().countryIndo)
    await registerCompanyPage.fillCountryIndonesia(payloadCreateIndonesia().dataIndonesia)
    await registerCompanyPage.clickbuttonNext()
    await registerCompanyPage.clickbuttonNext()
    await registerCompanyPage.filltxtBranchName(payloadCreateIndonesia().branch)
    await registerCompanyPage.clickbuttonFillTheSameDataRecords()
  });

  test("Create new Company, Country: Malaysia", async ({ page, registerCompanyPage }) => {

    await registerCompanyPage.filltxtCompanyName(payloadCreateMalaysia().companyNameMalay)
    await registerCompanyPage.filltxtEmail(payloadCreateMalaysia().emailMalay)
    await registerCompanyPage.filltxtPhone(payloadCreateMalaysia().phoneMalay)
    await registerCompanyPage.selectdrpdwnIndustryType()
    await registerCompanyPage.selectdrpdwnCompanyType()
    await registerCompanyPage.selectdrpdwnLanguage()
    await registerCompanyPage.filltxtStreetAddress(payloadCreateMalaysia().addressMalay)

    await registerCompanyPage.selectdrpdwnCountry(payloadCreateMalaysia().countryMalay)
    await registerCompanyPage.fillCountryMalaysia(payloadCreateMalaysia().dataMalaysia)
    await registerCompanyPage.clickbuttonNext()
    await registerCompanyPage.clickbuttonNext()
    await registerCompanyPage.filltxtBranchName(payloadCreateMalaysia().branch)
    await registerCompanyPage.clickbuttonFillTheSameDataRecords()
  });

  test("Create new Company, Country: Philippine", async ({ page, registerCompanyPage }) => {

    await registerCompanyPage.filltxtCompanyName(payloadCreatePhilippine().companyNamePhilippine)
    await registerCompanyPage.filltxtEmail(payloadCreatePhilippine().emailPhilippine)
    await registerCompanyPage.filltxtPhone(payloadCreatePhilippine().phonePhilippine)
    await registerCompanyPage.selectdrpdwnIndustryType()
    await registerCompanyPage.selectdrpdwnCompanyType()
    await registerCompanyPage.selectdrpdwnLanguage()
    await registerCompanyPage.filltxtStreetAddress(payloadCreatePhilippine().addressPhilippine)

    await registerCompanyPage.selectdrpdwnCountry(payloadCreatePhilippine().countryPhilippine)
    await registerCompanyPage.fillCountryPhilippine(payloadCreatePhilippine().dataPhilippine)
    await registerCompanyPage.clickbuttonNext()
    await registerCompanyPage.clickbuttonNext()
    await registerCompanyPage.filltxtBranchName(payloadCreatePhilippine().branch)
    await registerCompanyPage.clickbuttonFillTheSameDataRecords()
  });

  test.afterEach(async ({ page, companiesPage, registerCompanyPage, manageCompanyPage }) => {

    await registerCompanyPage.checkcheckboxPolicyAndTNC()
    await registerCompanyPage.clickbuttonRegister()
    await registerCompanyPage.verifytoastStatus()
    // // Delete Company
    // await companiesPage.clickbuttonManageLast()
    // await manageCompanyPage.clickbuttonDelete()
    // await manageCompanyPage.checkcheckboxAgreeDelete()
    // await manageCompanyPage.clickbuttonConfirm()
    // await manageCompanyPage.verifystatus()
  });
});
