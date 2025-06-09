import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import {
  createSegment,
  fileSegmentUsers,
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

  test("User be able to Create Segment Users", async ({
    page,
    userSegmentPage,
  }) => {
    // Create User Segment
    await userSegmentPage.clickbuttonAddNew();
    await userSegmentPage.filltxtSegmentName(createSegment.segmentName);
    await userSegmentPage.clickbuttonSaveData();
    await userSegmentPage.validateToastSuccessCreated(
      toastMessage.successCreated
    );

    // Access Detail User Segment
    await userSegmentPage.clickbuttonViewDetail1();
    await userSegmentPage.clickbuttonImportData();
    await userSegmentPage.clickbuttonUploadNewFile(fileSegmentUsers);
    await userSegmentPage.validateToastSuccessUpload(
      toastMessage.successUpload
    );
    await page.waitForTimeout(15000);
  });
});
