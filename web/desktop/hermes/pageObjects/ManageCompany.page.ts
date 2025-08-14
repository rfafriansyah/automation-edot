import { Locator, Page, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class ManageCompanyPage {
  readonly page: Page;

  // Profile Account
  readonly buttonDelete: Locator;
  readonly checkboxAgreeDelete: Locator;
  readonly buttonConfirm: Locator;

  // Company User
  readonly menuCompanyUser: Locator;
  readonly buttonAddUser: Locator;
  readonly txtName: Locator;
  readonly txtUsername: Locator;
  readonly txtEmail: Locator;
  readonly txtPhone: Locator;
  readonly txtPassword: Locator;
  readonly txtEmployeeID: Locator;
  readonly tabGeneralInfo: Locator;
  readonly tabBranch: Locator;
  readonly buttonAddBranch: Locator;
  readonly buttonSubmit: Locator;

  readonly status: Locator;
  readonly toast: Locator;

  constructor(page: Page) {
    this.page = page;

    // Profile Account
    this.buttonDelete = page.getByRole("button", { name: "Delete" });
    this.checkboxAgreeDelete = page.locator("#select-all");
    this.buttonConfirm = page.getByRole("button", { name: "Confirm" });

    // Company User
    this.menuCompanyUser = page.getByText("Company User");
    this.buttonAddUser = page.getByRole("button", { name: "+ Add User" });
    this.txtName = page.getByRole("textbox", { name: "Input Name" });
    this.txtUsername = page.getByRole("textbox", { name: "Input Username" });
    this.txtEmail = page.getByRole("textbox", { name: "Input Email" });
    this.txtPhone = page.getByRole("textbox", { name: "Input Phone" });
    this.txtPassword = page.getByRole("textbox", { name: "Input Password" });
    this.txtEmployeeID = page.getByRole("textbox", {
      name: "Input Employee ID",
    });
    this.tabGeneralInfo = page.getByText("General Info");
    this.tabBranch = page.getByRole("list").getByText("Branch");
    this.buttonAddBranch = page.getByRole("button", { name: "+ Add Branch" });
    this.buttonSubmit = page.getByRole("button", { name: "Submit Data" });

    this.status = page.getByRole("status");
    this.toast = page
      .getByRole("region", { name: "Notifications alt+T" })
      .getByRole("listitem");
  }

  // Profile Account
  async clickbuttonDelete() {
    await this.buttonDelete.click();
  }
  async checkcheckboxAgreeDelete() {
    await this.checkboxAgreeDelete.check();
  }
  async clickbuttonConfirm() {
    await this.buttonConfirm.click();
  }

  // Company User
  async clickmenuCompanyUser() {
    await this.menuCompanyUser.click();
  }
  async clickbuttonAddUser() {
    await this.buttonAddUser.click();
  }
  async filltxtName(name: any) {
    await this.txtName.fill(name);
  }
  async fillUsername(username: any) {
    await this.txtUsername.fill(username);
  }
  async filltxtEmail(email: any) {
    await this.txtEmail.fill(email);
  }
  async filltxtPhone(phone: any) {
    await this.txtPhone.fill(phone);
  }
  async filltxtPassword(password: any) {
    await this.txtPassword.fill(password);
  }
  async filltxtEmployeeID(employeeID: any) {
    await this.txtEmployeeID.fill(employeeID);
  }
  async verifyAddCompanyUser() {
    await this.page
      .getByRole("heading", { name: "Add Company User" })
      .waitFor({ state: "visible" });
    await expect(this.tabGeneralInfo).toBeVisible();
    await expect(this.tabBranch).toBeVisible();
  }
  async fillGeneralInfo(generalInfo: any) {
    await this.txtName.click();
    await this.txtName.fill(generalInfo.name);
    await this.page.waitForTimeout(2000);
    await this.txtUsername.dblclick();
    await this.page.waitForTimeout(2000);
    await this.txtUsername.click();
    await this.txtUsername.waitFor({ state: "visible" });
    const fakeName = faker.person.firstName();
    const lengthNumber = faker.number.int({ min: 3, max: 3 });
    const shortUsername = fakeName.slice(0, 4);
    const randomNumber = faker.string.numeric(lengthNumber);
    const randomUsername = `AT${shortUsername}${randomNumber}`;
    await console.log(randomUsername);
    await this.txtUsername.fill(randomUsername);
    await this.txtEmail.click();
    await this.txtEmail.fill(generalInfo.email);
    await this.txtPhone.click();
    await this.txtPhone.fill(generalInfo.phone);
    await this.txtPassword.click();
    await this.txtPassword.fill(generalInfo.password);
  }
  async clicktabBranch() {
    await this.tabBranch.click();
  }
  async fillBranch() {
    await this.buttonAddBranch.click();
    await this.page.getByRole("checkbox").first().click();
    await this.page.getByRole("button", { name: "Add" }).click();
  }

  async clickbuttonSubmit() {
    await this.buttonSubmit.click();
  }

  async validateSuccessCreateCompanyUser(message: string) {
    await this.toast.waitFor({ state: "visible" });
    await expect(this.toast).toHaveText(message);
  }

  async verifystatus() {
    await this.status.waitFor({ state: "visible" });
    await expect(this.status).toHaveText("Success Delete Company");
  }
}
