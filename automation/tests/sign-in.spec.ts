import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/sign-in.page';
import { requireEnv } from '../utils/env';

test.describe('Flow 0 - Sign In', () => {
  test('P0 - user can start sign-in and tenant lookup is requested', async ({ page }) => {
    const signIn = new SignInPage(page);
    const username = requireEnv('WEMINE_USERNAME');
    let whoRequested = false;

    await page.route('**/user/who**', async route => {
      whoRequested = true;
      await route.continue();
    });

    await signIn.open();
    await signIn.enterUsername(username);
    await signIn.continue();

    await expect.poll(() => whoRequested, { timeout: 10_000 }).toBeTruthy();
  });

  test('P0 - profile and tenant master data are requested during bootstrap', async ({ page }) => {
    const signIn = new SignInPage(page);
    const username = requireEnv('WEMINE_USERNAME');
    const requests = new Set<string>();

    await page.route('**/*', async route => {
      const url = route.request().url();

      if (url.includes('/user/me')) requests.add('/user/me');
      if (url.includes('/tenant/master')) requests.add('/tenant/master');

      await route.continue();
    });

    await signIn.open();
    await signIn.enterUsername(username);
    await signIn.continue();

    await expect.poll(() => requests.has('/user/me'), {
      timeout: 15_000
    }).toBeTruthy();

    await expect.poll(() => requests.has('/tenant/master'), {
      timeout: 15_000
    }).toBeTruthy();
  });
});
