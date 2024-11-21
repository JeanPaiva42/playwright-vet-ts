import { userAttemptsTo } from "../../pageActions/index";
import FeaturesPage from "../../pageComponents/FeaturesDropdown";
import { test, expect } from '@playwright/test';

var featuresPage: FeaturesPage;

test.describe('Verifies the Feature dropdown and sections', async () => {
  const baseUrl: string = 'https://vetspire.com/';
  test('confirms that dropdown options are correctly loaded and we are taken to Analytics Page', async ({ page }) => {
    const analyticsUrl: string = baseUrl + '#analytics';
    featuresPage = new FeaturesPage(page);

    await page.goto(baseUrl);

    await userAttemptsTo.hoverFeaturesLink(page);

    expect(await featuresPage.schedulingLink()).toBeVisible();
    expect(await featuresPage.patientFlowLink()).toBeVisible();
    expect(await featuresPage.analyticsLink()).toBeVisible();

    await userAttemptsTo.clickAnalyticsLink(page);

    await expect(page).toHaveURL(analyticsUrl);
  })

  test('confirms that users are taken to the Scheduling page', async ({ page }) => {
    const schedulingUrl: string = baseUrl + '#scheduling';
    featuresPage = new FeaturesPage(page);

    await page.goto(baseUrl);

    await userAttemptsTo.hoverFeaturesLink(page);

    expect(await featuresPage.schedulingLink()).toBeVisible();
    await (await featuresPage.schedulingLink()).click();

    await expect(page).toHaveURL(schedulingUrl);
  })
});
