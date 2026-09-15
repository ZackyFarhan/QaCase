import { test, expect } from '@playwright/test';
import { HazardPage } from '../pages/hazard.page';

test.describe('Flow 2 - Safety Hazard', () => {
  test.beforeEach(async ({ page }) => {
    // The assignment does not provide an authentication environment.
    // These tests assume the test account is already authenticated.
    await page.goto('/');
  });

  test('P0 - mandatory hazard fields prevent empty submission', async ({ page }) => {
    const hazard = new HazardPage(page);

    await hazard.open();
    await hazard.submit();

    await expect(page.locator('[aria-invalid="true"]').first()).toBeVisible();
  });

  test('P1 - PIC is preselected to the reporter', async ({ page }) => {
    const hazard = new HazardPage(page);

    await hazard.open();
    await hazard.expectPicSelected();
  });

  test('P1 - Co Observer supports adding another field', async ({ page }) => {
    const hazard = new HazardPage(page);

    await hazard.open();
    await hazard.addCoObserver();

    await expect(page.getByLabel(/co observer/i).nth(1)).toBeVisible();
  });
});
