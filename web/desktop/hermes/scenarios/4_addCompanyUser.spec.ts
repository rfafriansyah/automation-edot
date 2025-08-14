import { test } from "../pageObjects/Base.page";
import {
  payloadCreateIndonesia,
  payloadGeneralInfo,
} from "../../../../helper/hermes/payloadHermes";
import { credentialsLogin } from "../../../../helper/hermes/credentials";

test.describe.serial("Create Company User on Hermes - Positive", () => {
  test.beforeEach(
    async ({
      page,
      loginPage,
      navbarPage,
      companiesPage,
      registerCompanyPage,
    }) => {
      await loginPage.open();
      await loginPage.clickbuttonEmailUsername();
      await loginPage.filltxtEmailUsername(credentialsLogin().username);
      await loginPage.clickbuttonLogin();
      await loginPage.filltxtPassword(credentialsLogin().password);
      await loginPage.clickbuttonLogin();
      await navbarPage.clickbuttonCompanies();
      // await companiesPage.clickbuttonAddCompany()
      // await registerCompanyPage.filltxtCompanyName(payloadCreateIndonesia().companyNameIndo)
      // await registerCompanyPage.filltxtEmail(payloadCreateIndonesia().emailIndo)
      // await registerCompanyPage.filltxtPhone(payloadCreateIndonesia().phoneIndo)
      // await registerCompanyPage.selectdrpdwnIndustryType()
      // await registerCompanyPage.selectdrpdwnCompanyType()
      // await registerCompanyPage.selectdrpdwnLanguage()
      // await registerCompanyPage.filltxtStreetAddress(payloadCreateIndonesia().addressIndo)

      // await registerCompanyPage.selectdrpdwnCountry(payloadCreateIndonesia().countryIndo)
      // await registerCompanyPage.fillCountryIndonesia(payloadCreateIndonesia().dataIndonesia)
      // await registerCompanyPage.clickbuttonNext()
      // await registerCompanyPage.clickbuttonNext()
      // await registerCompanyPage.filltxtBranchName(payloadCreateIndonesia().branch)
      // await registerCompanyPage.clickbuttonFillTheSameDataRecords()
      // await registerCompanyPage.checkcheckboxPolicyAndTNC()
      // await registerCompanyPage.clickbuttonRegister()
      // await registerCompanyPage.verifytoastStatus()
      await companiesPage.clickbuttonManageLast();
    }
  );

  test.only("Create User Company User HQ", async ({
    page,
    manageCompanyPage,
  }) => {
    await manageCompanyPage.clickmenuCompanyUser();
    await manageCompanyPage.clickbuttonAddUser();
    await manageCompanyPage.verifyAddCompanyUser();
    await manageCompanyPage.fillGeneralInfo(payloadGeneralInfo());
    await manageCompanyPage.clicktabBranch();
    await manageCompanyPage.fillBranch();
    await manageCompanyPage.clickbuttonSubmit();
    await page.waitForTimeout(1000);
    await manageCompanyPage.validateSuccessCreateCompanyUser(
      "Success Add Company User"
    );
  });
});
