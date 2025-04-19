import { test as base } from "@playwright/test";
import { LoginPage } from "./Login.page";
import { NavbarPage } from "./Navbar.page";
import { CompaniesPage } from "./Companies.page";
import { RegisterCompanyPage } from "./RegisterCompany.page";
import { ManageCompanyPage } from "./ManageCompany.page";

type MyFixtures = {
  loginPage: LoginPage
  navbarPage: NavbarPage
  companiesPage: CompaniesPage
  registerCompanyPage: RegisterCompanyPage
  manageCompanyPage: ManageCompanyPage
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  navbarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },
  companiesPage: async ({ page }, use) => {
    await use(new CompaniesPage(page));
  },
  registerCompanyPage: async ({ page }, use) => {
    await use(new RegisterCompanyPage(page));
  },
  manageCompanyPage: async ({ page }, use) => {
    await use(new ManageCompanyPage(page));
  },
});

export { expect } from "@playwright/test";
