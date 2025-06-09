import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import {
  createSegment,
  toastMessage,
} from "../../../../../helper/zeus/payload";

test.describe.serial("Segment Users - Positive", () => {
  test.beforeEach(async ({ page, loginPage, homePage, navbarPage }) => {
    await page.goto("./");
    await loginPage.clickbuttonEmailUsername();
    await loginPage.filltxtEmailUsername(credentialsLogin().username);
    await loginPage.clickbuttonLogin();
    await loginPage.filltxtPassword(credentialsLogin().password);
    await loginPage.clickbuttonLogin();
    await homePage.validateHomePage();
    await navbarPage.clicksubmenuUserSegment();
  });

  test("User be able to access Detail User Segment", async ({
    page,
    userSegmentPage,
    toastComponents,
  }) => {
    // Create User Segment
    await userSegmentPage.clickbuttonAddNew();
    await userSegmentPage.filltxtSegmentName(createSegment.segmentName);
    await userSegmentPage.clickbuttonSaveData();
    await toastComponents.validateToastSuccessCreated(
      toastMessage.successCreated
    );

    // Access Detail User Segment
    await userSegmentPage.clickbuttonViewDetail1();
    await page.waitForTimeout(5000);
  });
});
