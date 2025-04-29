import { test } from "../pageObjects/Base.page";
import { payloadLogin } from '../../../../helper/payloadHermes'


let username = `smoketestrhama23april04@yopmail.com`
let password = `Rhama@123`

test.describe.serial("Login Page Zeus - Positive", () => {
  test.beforeEach(async ({ page, loginPage, }) => {

    await page.goto("./");
  });

  test("User melakukan login menggunakan username", async ({ page, loginPage, homePage }) => {

    await loginPage.clickbuttonEmailUsername()
    await loginPage.filltxtEmailUsername(username)
    await loginPage.clickbuttonLogin()
    await loginPage.filltxtPassword(password)
    await loginPage.clickbuttonLogin()
    await homePage.validateHomePage()
    await page.waitForTimeout(2000)
  });


});
