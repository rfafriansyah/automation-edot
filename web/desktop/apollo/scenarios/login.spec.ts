import { test } from "../pageObjects/Base.page";
import { payloadLogin } from '../../../../helper/payloadHermes'


let username = `qaproduction1974`
let password = `Smoketest1@`

test.describe.serial("Login Page Hermes - Positive", () => {
  
  test.beforeEach(async ({ page, loginPage, }) => {
    await loginPage.open();
  });

  test("User melakukan login menggunakan username", async ({ page, loginPage, homePage }) => {

    await page.reload()
    await page.pause()
    await page.waitForTimeout(2000)
  });


});
