import { expect, Page } from '@playwright/test';

export class SignInPage {
  constructor(private readonly page: Page) {}

  readonly username = this.page.getByLabel(/username/i);
  readonly continueButton = this.page.getByRole('button', {
    name: /continue|sign in|login/i
  });
  readonly progressBar = this.page.getByRole('progressbar');

  async open() {
    await this.page.goto('/');
  }

  async enterUsername(username: string) {
    await this.username.fill(username);
  }

  async continue() {
    await this.continueButton.click();
  }

  async expectBootstrapProgress() {
    await expect(this.progressBar).toBeVisible();
  }
}
