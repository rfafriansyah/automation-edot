import { test } from "../../pageObjects/Base.page";
import { credentialsLogin } from "../../../../../helper/zeus/credentials";
import { createSegment } from "../../../../../helper/zeus/payload";

test.describe.serial("Create User Segment - Positive", () => {
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

  test("User be able to create User Segment", async ({
    page,
    userSegmentPage,
  }) => {
    await userSegmentPage.clickbuttonAddNew();
    await userSegmentPage.filltxtSegmentName(createSegment.segmentName);
    await userSegmentPage.clickbuttonSaveData();
    await userSegmentPage.validateToastSuccess();
    await page.waitForTimeout(2000);
  });
});
