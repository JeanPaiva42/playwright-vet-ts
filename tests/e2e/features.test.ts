import { userAttemptsTo } from "../../pageActions/index";
import FeaturesPage from "../../pageComponents/FeaturesDropdown";
import { test, expect } from '@playwright/test';

var featuresPage: FeaturesPage;
const baseUrl: string = 'https://vetspire.com/';

test.describe('Verifies the Feature dropdown and sections', async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    featuresPage = new FeaturesPage(page);
  });

  test('navigates to Analytics Page from Features dropdown', async ({ page }) => {
    const analyticsUrl: string = baseUrl + '#analytics';

    await userAttemptsTo.hoverFeaturesLink(page);

    expect(await featuresPage.schedulingLink()).toBeVisible();
    expect(await featuresPage.patientFlowLink()).toBeVisible();
    expect(await featuresPage.analyticsLink()).toBeVisible();

    await userAttemptsTo.clickAnalyticsLink(page);

    await expect(page).toHaveURL(analyticsUrl);
  })

  test('navigates to Scheduling Page from Features dropdown', async ({ page }) => {
    const schedulingUrl: string = baseUrl + '#scheduling';

    await userAttemptsTo.hoverFeaturesLink(page);

    expect(await featuresPage.schedulingLink()).toBeVisible();

    await userAttemptsTo.clickSchedulingLink(page);

    await expect(page).toHaveURL(schedulingUrl);
  })
});
