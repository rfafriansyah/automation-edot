import { test } from "../pageObjects/Base.page";

let username = `it.qa`
let password = `it.QA2025`

let subs = `337089`
let extend = `esuite`
let statusExtend = `Trial has been extended successfully`

test.describe.serial("Core  - Positive", () => {
  test.beforeEach(async ({ page, loginPage, navbarPage }) => {

    await loginPage.open();
    await loginPage.clickbuttonLoginWithEdot()
    await loginPage.filltxtEmailUsername(username)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(password)
    await loginPage.clickbuttonLogin()
    await navbarPage.clickmoduleCore()

  });

  test("Validate Page", async ({ page, corePage, }) => {

    await corePage.validatePage()
  });

  test("Validate Menu Subscription", async ({ page, corePage, }) => {

    await corePage.validateMenuSubscription()
  });

  test("Added Subscriptions", async ({ page, corePage, }) => {

    await corePage.clickMenuSubscription()
    await corePage.clicksubmenuSubscriptions()
    await corePage.filltxtSearchbarSubmenuSubscriptions(subs)
    await page.waitForTimeout(1000)
    await corePage.clickbuttonViewSubmenuSubscriptions()
    await corePage.clickbuttonExtendTrialSubmenuSubscriptions()
    await corePage.filltxtExtendSubmenuSubscriptions(extend)
    await corePage.clickbuttonYesExtendSubmenuSubscriptions()
    await corePage.validateStatus(statusExtend)
  });

  test("Added Quota User Grub", async ({ page, corePage, }) => {

    let statusExtendQuota = `Quota has been extended successfully`

    await corePage.clickMenuSubscription()
    await corePage.clicksubmenuSubscriptions()
    await corePage.filltxtSearchbarSubmenuSubscriptions(subs)
    await page.waitForTimeout(1000)
    await corePage.clickbuttonViewSubmenuSubscriptions()
    await corePage.clickbuttonAllocationsSubmenuSubscriptions()
    await corePage.clickbuttonExtendQuotaSubmenuSubscriptions(`1`, statusExtendQuota)
    await corePage.validateStatus(statusExtendQuota)
  });
});
