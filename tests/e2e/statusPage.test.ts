import StatusPage from "../../pageComponents/StatusPage";
import { test, expect } from '@playwright/test';

var statusPage: StatusPage;

test.describe('Verifies the status page', async () => {

  test('confirms that the page correct loads', async ({ page }) => {
    const baseUrl: string = 'https://status.vetspire.com/';
    statusPage = new StatusPage(page);

    await page.goto(baseUrl);
    await page.waitForLoadState('networkidle');

    await expect(await statusPage.subscribeToUpdatesLink()).toBeVisible();
    await expect(await statusPage.systemMetricsLink()).toBeVisible();
    await expect(await statusPage.pastIncidentsLink()).toBeVisible();
  })
});
