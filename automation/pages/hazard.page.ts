import { expect, Page } from '@playwright/test';

export class HazardPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.getByRole('link', { name: /^hazard$/i }).click();
  }

  async submit() {
    await this.page.getByRole('button', {
      name: /submit|report/i
    }).click();
  }

  async expectPicSelected() {
    const pic = this.page.getByLabel(/^pic$/i);
    await expect(pic).toBeVisible();
    await expect(pic).not.toHaveValue('');
  }

  async addCoObserver() {
    await this.page.getByRole('button', { name: /\+/ }).click();
  }
}
