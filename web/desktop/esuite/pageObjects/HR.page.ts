import { Locator, Page, expect } from "@playwright/test";

export class HRPage {
  readonly page: Page;

  readonly moduleHRPage: Locator;

  // Employee
  readonly employees: Locator;
  readonly attendance: Locator;
  readonly scheduler: Locator;

  // Configuration
  readonly department: Locator;
  readonly jobPosition: Locator;
  readonly shift: Locator;
  readonly holiday: Locator;

  constructor(page: Page) {
    this.page = page;

    this.moduleHRPage = page.getByRole("link", { name: "HR" });

    this.employees = page.getByRole("link", { name: "Employees" });
    this.attendance = page.getByRole("link", { name: "Attendance" });
    this.scheduler = page.getByRole("link", { name: "Scheduler" });
    this.department = page.getByRole("link", { name: "Department" });
    this.jobPosition = page.getByRole("link", { name: "Job Position" });
    this.shift = page.getByRole("link", { name: "Shift" });
    this.holiday = page.getByRole("link", { name: "Holiday" });
  }

  async clickmoduleHRPage() {
    await this.moduleHRPage.click();
  }

  // Employee
  async clickemployees() {
    await this.employees.click();
  }
  async clickattendance() {
    await this.attendance.click();
  }
  async clickscheduler() {
    await this.scheduler.click();
  }

  // Configuration
  async clickdepartment() {
    await this.department.click();
  }
  async clickjobPosition() {
    await this.jobPosition.click();
  }
  async clickshift() {
    await this.shift.click();
  }
  async clickholiday() {
    await this.scheduler.click();
  }

  // Validate be able access
  async validateBeAbleAccess() {
    await expect(
      this.page.getByRole("img", { name: "Branch Restriction" })
    ).not.toBeVisible();
    await expect(
      this.page.getByText(
        "Opps, you do not have permission to access this page"
      )
    ).not.toBeVisible();
    await expect(
      this.page.getByText(
        "You need to log in using an account that has the necessary access, or please contact your administrator for further assistance."
      )
    ).not.toBeVisible();
  }

  // Validate Restriction
  async validateRestriction() {
    await expect(
      this.page.getByRole("img", { name: "Branch Restriction" })
    ).toBeVisible();
    await expect(
      this.page.getByText(
        "Opps, you do not have permission to access this page"
      )
    ).toBeVisible();
    await expect(
      this.page.getByText(
        "You need to log in using an account that has the necessary access, or please contact your administrator for further assistance."
      )
    ).toBeVisible();
  }
}
