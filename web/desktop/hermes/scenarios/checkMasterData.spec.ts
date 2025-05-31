import { test } from "../pageObjects/Base.page";
import {
  payloadCreateIndonesia,
  payloadCreateMalaysia,
  payloadCreatePhilippine,
} from "../../../../helper/hermes/payloadHermes";
import { credentialsLogin } from "../../../../helper/hermes/credentials";

test.describe.only("Create New Company on Hermes - Positive", () => {
  test.beforeEach(async ({ page, loginPage, navbarPage, companiesPage }) => {
    await loginPage.open();
    await loginPage.clickbuttonEmailUsername();
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
    await navbarPage.clickbuttonCompanies();
    await companiesPage.clickbuttonAddCompany();
  });

  test("Create new Company, Country: Indonesia", async ({
    registerCompanyPage,
  }) => {
    await registerCompanyPage.filltxtCompanyName(
      payloadCreateIndonesia().companyNameIndo
    );
    await registerCompanyPage.filltxtEmail(payloadCreateIndonesia().emailIndo);
    await registerCompanyPage.filltxtPhone(payloadCreateIndonesia().phoneIndo);
    await registerCompanyPage.selectdrpdwnIndustryType();
    await registerCompanyPage.selectdrpdwnCompanyType();
    await registerCompanyPage.selectdrpdwnLanguage();
    await registerCompanyPage.filltxtStreetAddress(
      payloadCreateIndonesia().addressIndo
    );

    await registerCompanyPage.selectdrpdwnCountry(
      payloadCreateIndonesia().countryIndo
    );
    await registerCompanyPage.fillCountryIndonesia(
      payloadCreateIndonesia().dataIndonesia
    );
    await registerCompanyPage.clickbuttonNext();
    await registerCompanyPage.clickbuttonNext();
    await registerCompanyPage.filltxtBranchName(
      payloadCreateIndonesia().branch
    );
    await registerCompanyPage.clickbuttonFillTheSameDataRecords();
  });

  test.afterEach(
    async ({ page, companiesPage, registerCompanyPage, manageCompanyPage }) => {
      await registerCompanyPage.checkcheckboxPolicyAndTNC();
      await registerCompanyPage.clickbuttonRegister();
      await registerCompanyPage.verifytoastStatus();
      await companiesPage.getgetCompanyID();
      await page.goto("https://company-platform-esuite.edot-dev.com");
      await page.pause();
      // // Delete Company
      // await companiesPage.clickbuttonManageLast()
      // await manageCompanyPage.clickbuttonDelete()
      // await manageCompanyPage.checkcheckboxAgreeDelete()
      // await manageCompanyPage.clickbuttonConfirm()
      // await manageCompanyPage.verifystatus()
    }
  );
});
