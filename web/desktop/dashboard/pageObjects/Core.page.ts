import { Locator, Page, expect } from '@playwright/test';

export class CorePage {
  readonly page: Page;
  readonly menuAuthentification: Locator

  readonly menuAuthorization: Locator

  readonly menuSubscription: Locator
  readonly submenuPackages: Locator
  readonly submenuSubscriptions: Locator
  readonly txtSearchbarSubmenuSubscriptions: Locator
  readonly buttonViewSubmenuSubscriptions: Locator
  readonly buttonExtendTrialSubmenuSubscriptions: Locator
  readonly txtExtendSubmenuSubscriptions: Locator
  readonly buttonYesExtendSubmenuSubscriptions: Locator
  readonly buttonAllocationsSubmenuSubscriptions: Locator
  readonly buttonExtendQuota1SubmenuSubscriptions: Locator
  readonly buttonExtendQuota2SubmenuSubscriptions: Locator
  readonly buttonExtendQuota3SubmenuSubscriptions: Locator
  readonly buttonExtendQuota4SubmenuSubscriptions: Locator
  readonly txtExtendQuotaSubmenuSubscriptions: Locator
  readonly buttonExtendQuotaSubmenuSubscriptions: Locator
  readonly labelQuotaLine2SubmenuSubscriptions: Locator

  readonly submenuBillings: Locator

  readonly menuAccount: Locator

  // readonly status: Locator

  constructor(page: Page) {
    this.page = page;
    this.menuAuthentification = page.getByRole('menuitem', { name: 'Authentication' }).locator('span')

    this.menuAuthorization = page.getByText('Authorization')

    this.menuSubscription = page.getByText('Subscription')
    this.submenuPackages = page.getByRole('link', { name: 'Packages' })
    this.submenuSubscriptions = page.getByRole('link', { name: 'Subscriptions' })
    this.txtSearchbarSubmenuSubscriptions = page.getByRole('textbox', { name: 'Search subscription code' })
    this.buttonViewSubmenuSubscriptions = page.getByTestId('view')
    this.buttonExtendTrialSubmenuSubscriptions = page.getByRole('button', { name: 'Extend Trial' })
    this.txtExtendSubmenuSubscriptions = page.getByRole('textbox', { name: 'esuite' })
    this.buttonYesExtendSubmenuSubscriptions = page.getByRole('button', { name: 'Yes, Extend' })
    this.buttonAllocationsSubmenuSubscriptions = page.getByRole('button').getByText('Allocations').last()
    this.buttonExtendQuota1SubmenuSubscriptions = page.getByRole('button', { name: 'Extend Quota' }).nth(1)
    this.buttonExtendQuota2SubmenuSubscriptions = page.getByRole('button', { name: 'Extend Quota' }).nth(2)
    this.buttonExtendQuota3SubmenuSubscriptions = page.getByRole('button', { name: 'Extend Quota' }).nth(3)
    this.buttonExtendQuota4SubmenuSubscriptions = page.getByRole('button', { name: 'Extend Quota' }).nth(4)
    this.txtExtendQuotaSubmenuSubscriptions = page.getByPlaceholder('0', { exact: true })
    this.buttonExtendQuotaSubmenuSubscriptions = page.getByRole('button', { name: 'Extend', exact: true })
    this.labelQuotaLine2SubmenuSubscriptions = page.locator('div[class="ant-modal-content"] div[class="ant-table-tbody-virtual ant-table-tbody"] div[class="ant-table-tbody-virtual-holder-inner"] div[class="ant-table-row"]:nth-child(2) div[class="ant-table-cell"]:nth-child(4)')

    this.submenuBillings = page.getByRole('link', { name: 'Billings' })

    this.menuAccount = page.getByText('Account')

    // this.status = page.getByRole('status')

  }

  async validatePage() {
    await expect(this.menuAuthentification).toBeVisible()
    await expect(this.menuAuthorization).toBeVisible()
    await expect(this.menuSubscription).toBeVisible()
    await expect(this.menuAccount).toBeVisible()
  }

  async clickmenuAuthentification() {
    await this.menuAuthentification.click()
  }

  async clickmenuAuthorization() {
    await this.menuAuthorization.click()
  }

  async clickmenuSubscription() {
    await this.menuSubscription.click()
  }
  async validateMenuSubscription() {
    await expect(this.submenuPackages).toBeVisible()
    await expect(this.submenuSubscriptions).toBeVisible()
    await expect(this.submenuBillings).toBeVisible()
  }
  async clickMenuSubscription() {
    await this.menuSubscription.click()
  }
  async clicksubmenuPackages() {
    await this.submenuPackages.click()
  }
  async clicksubmenuSubscriptions() {
    await this.submenuSubscriptions.click()
  }
  async filltxtSearchbarSubmenuSubscriptions(input: any) {
    await this.txtSearchbarSubmenuSubscriptions.fill(`subscription:${input}`)
  }
  async clickbuttonViewSubmenuSubscriptions() {
    await this.buttonViewSubmenuSubscriptions.click()
  }
  async clickbuttonExtendTrialSubmenuSubscriptions() {
    await this.buttonExtendTrialSubmenuSubscriptions.click()
  }
  async filltxtExtendSubmenuSubscriptions(input: any) {
    await this.txtExtendSubmenuSubscriptions.fill(input)
  }
  async clickbuttonYesExtendSubmenuSubscriptions() {
    await this.buttonYesExtendSubmenuSubscriptions.click()
  }
  async clickbuttonAllocationsSubmenuSubscriptions() {
    await this.buttonAllocationsSubmenuSubscriptions.click()
  }

  async clickbuttonExtendQuotaSubmenuSubscriptions(quota: any, status: any) {
    const beforeAdded = await this.labelQuotaLine2SubmenuSubscriptions.innerText()
    const beforeAddedInt = await parseInt(beforeAdded)
    await this.buttonExtendQuota1SubmenuSubscriptions.click()
    await this.txtExtendQuotaSubmenuSubscriptions.fill(quota)
    await this.buttonExtendQuotaSubmenuSubscriptions.click()
    await this.validateStatus(status)
    await this.page.waitForTimeout(2000)
    const result = await beforeAddedInt + 1
    const afterAdded = await this.labelQuotaLine2SubmenuSubscriptions.innerText()
    const afterAddedInt = await parseInt(afterAdded)
    await expect(afterAddedInt).toBe(result)
  }

  async clicksubmenuBillings() {
    await this.submenuBillings.click()
  }


  async clickmenuAccount() {
    await this.menuAccount.click()
  }

  async validateStatus(input: any) {
    const status = await this.page.getByText(input)
    await expect(status).toBeVisible()
    await expect(status).toHaveText(input)
  }
}