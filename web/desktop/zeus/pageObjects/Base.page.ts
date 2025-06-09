import { test as base } from "@playwright/test";
import { LoginPage } from "./Login.page";
import { HomePage } from "./Home.page";
import { NavbarPage } from "./Navbar.page";
import { UserSegmentPage } from "./UserSegment.page";
import { MessageTemplatePage } from "./MessageTemplate.page";
import { PushMessagePage } from "./pushMessage.page";
import { ToastComponents } from "./components/toast.page";

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  navbarPage: NavbarPage;
  userSegmentPage: UserSegmentPage;
  messageTemplatePage: MessageTemplatePage;
  pushMessagePage: PushMessagePage;
  toastComponents: ToastComponents;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  navbarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },
  userSegmentPage: async ({ page }, use) => {
    await use(new UserSegmentPage(page));
  },
  messageTemplatePage: async ({ page }, use) => {
    await use(new MessageTemplatePage(page));
  },
  pushMessagePage: async ({ page }, use) => {
    await use(new PushMessagePage(page));
  },
  toastComponents: async ({ page }, use) => {
    await use(new ToastComponents(page));
  },
});

export { expect } from "@playwright/test";
