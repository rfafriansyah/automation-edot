import { test } from "../pageObjects/Base.page";
import { payloadLogin, payloadCreateIndonesia } from '../../../../helper/payloadHermes'

let email = `23aprlrhm0002@yopmail.com`
let fullName = `Nama Full Name Testing`
let password = `Rhama@123`

let holdingName = `Holding213534 Name Testing`
let phone = `8134344444`



test.describe.serial("Register Hermes - Positive", () => {
  test.beforeEach(async ({ page, loginPage, }) => {

    await loginPage.open();
  });

  test.only("User melakukan register", async ({ page, loginPage, registerHermesPage }) => {

    await loginPage.clickbuttonCreateAccount()
    await registerHermesPage.filltxtEmail(email)
    await registerHermesPage.clickbuttonNext()
    await registerHermesPage.clickbuttonNext2()
    await page.pause()
    await registerHermesPage.filltxtFullName(fullName)
    await registerHermesPage.filltxtpassword(password)
    await registerHermesPage.clickbuttonRegister()

    await loginPage.clickbuttonEmailUsername()
    await loginPage.filltxtEmailUsername(email)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(password)
    await loginPage.clickbuttonLogin()
    await loginPage.clickbuttonNext()

    await registerHermesPage.filltxtHoldingName(holdingName)
    await registerHermesPage.filltxtPhone(phone)
    await registerHermesPage.selectdropdownIndustryType()
    await registerHermesPage.selectdropdownCompanyType()
    await registerHermesPage.selectdrpdwnCountry()
    await registerHermesPage.selectdrpdwnNumberOfEmployee()
    await registerHermesPage.clickbuttonRegisterAccount()

    // OPSI ===>>> NANTI HAPUS
    // await page.waitForTimeout(10000)
    // await page.goto(`https://hermes-dashboard.edot-stg.com/`)
    // await loginPage.clickbuttonEmailUsername()
    // await loginPage.filltxtEmailUsername(email)
    // await loginPage.clickbuttonLogin()
    // await loginPage.filltxtPassword(password)
    // await loginPage.clickbuttonLogin()

    await registerHermesPage.filltxtCompanyName(`Company Name Testing`)
    await registerHermesPage.filltxtStreetAddress(`Street Address Testing`)
    await registerHermesPage.selectdrpdwnCountry()
    await registerHermesPage.fillCountryIndonesia(payloadCreateIndonesia().dataIndonesia)
    await registerHermesPage.clickbuttonNext()
    await registerHermesPage.clickbuttonNext()
    await registerHermesPage.filltxtBranchName(`Branch Name Testing`)
    await registerHermesPage.clickbuttonFillTheSameDataRecords()
    await registerHermesPage.checkcheckboxPolicyAndTNC()
    await registerHermesPage.clickbuttonRegister()
    await registerHermesPage.verifytoastStatus()
  })
});
