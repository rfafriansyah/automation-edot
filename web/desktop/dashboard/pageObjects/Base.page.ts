import { test as base } from "@playwright/test";
import { LoginPage } from "./Login.page";
import { DashboardPage } from "./Dashboard.page";
import { NavbarPage } from "./Navbar.page";
import { CorePage } from "./Core.page";

type MyFixtures = {
  loginPage: LoginPage;
  navbarPage: NavbarPage
  dashboardPage: DashboardPage
  corePage: CorePage
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  navbarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  corePage: async ({ page }, use) => {
    await use(new CorePage(page));
  },

});

export { expect } from "@playwright/test";
