import { test } from "../pageObjects/Base.page";
import { payloadLogin } from '../../../../helper/payloadHermes'

test.describe.serial("Delete Company Hermes - Positive", () => {
  test("User melakukan hapus perusahaan", async ({ page, loginPage, navbarPage, companiesPage, manageCompanyPage }) => {

    await loginPage.open();
    await loginPage.clickbuttonEmailUsername()
    await loginPage.filltxtEmailUsername(payloadLogin().username)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(payloadLogin().password)
    await loginPage.clickbuttonLogin()
    await navbarPage.clickbuttonCompanies()
    await companiesPage.clickbuttonManageLast()
    await manageCompanyPage.clickbuttonDelete()
    await manageCompanyPage.checkcheckboxAgreeDelete()
    await manageCompanyPage.clickbuttonConfirm()
    await manageCompanyPage.verifystatus()
  });
});
