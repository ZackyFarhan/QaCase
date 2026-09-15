import { test, expect } from '@playwright/test';
import { EquipmentInspectionPage } from '../pages/equipment-inspection.page';

test.describe('Flow 1 - Equipment Inspection', () => {
  test.beforeEach(async ({ page }) => {
    // The assignment does not provide an authentication environment.
    // These tests assume the test account is already authenticated.
    await page.goto('/');
  });

  test('P1 - form fields are displayed for the selected Form Code', async ({ page }) => {
    const inspection = new EquipmentInspectionPage(page);

    await inspection.open();
    await inspection.startNewInspection();
    await inspection.expectFormCode();

    await expect(page.getByText(/form code/i)).toBeVisible();
  });

  test('P1 - empty inspection submission is rejected', async ({ page }) => {
    const inspection = new EquipmentInspectionPage(page);

    await inspection.open();
    await inspection.startNewInspection();
    await inspection.submit();

    await expect(page.locator('[aria-invalid="true"]').first()).toBeVisible();
  });
});
