import { expect, Page } from '@playwright/test';

export class EquipmentInspectionPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.getByRole('link', {
      name: /equipment inspection/i
    }).click();
  }

  async startNewInspection() {
    await this.page.getByRole('button', {
      name: /new inspection|new submission|new/i
    }).click();
  }

  async expectFormCode() {
    await expect(this.page.getByText(/form code/i)).toBeVisible();
  }

  async submit() {
    await this.page.getByRole('button', {
      name: /submit|save/i
    }).click();
  }
}
