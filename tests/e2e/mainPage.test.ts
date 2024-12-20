import { userAttemptsTo } from "../../pageActions/index";
import MainPage from "../../pageComponents/MainPage";
import ScheduleADemoModal from "../../pageComponents/ScheduleADemoModal";
import { test, expect } from '@playwright/test';

var mainPage: MainPage;
const baseUrl: string = 'https://vetspire.com/';

// Some of the tests here do not follow the Arrange, Act, Assert (AAA) Pattern
// I started doing them, and breaking into smaller cases, and turns out that some of them are just asserting, sadly I couldn't come back and fix it, but ideally they should

test.describe('Verifications on the main page', async () => {

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await page.goto(baseUrl);

  });

  test('validates key elements on the main page', async ({ page }) => {
    const featuresLinkName: string = 'Features';
    const pricingLinkName: string = 'Pricing';
    const resourcesLinkName: string = 'Resources';
    const demoButtonText: string = 'Schedule a Demo';

    await expect(await mainPage.scheduleADemoButton()).toContainText(demoButtonText);
    await expect(await mainPage.featuresLink()).toContainText(featuresLinkName);
    await expect(await mainPage.pricingLink()).toContainText(pricingLinkName);
    await expect(await mainPage.resourcesLink()).toContainText(resourcesLinkName);
  });

  test('opens Schedule a Demo modal and submits practice', async ({ page }) => {
    const scheduleADemoModal = new ScheduleADemoModal(page);
    const selectedPractice: string = 'Non-Profit';

    expect(await mainPage.scheduleADemoButton()).toBeVisible();

    (await mainPage.scheduleADemoButton()).click();

    await userAttemptsTo.selectAPracticeOrOrganization(page);
    await userAttemptsTo.chooseAPractice(page, selectedPractice);
    await userAttemptsTo.submitSelectedPractice(page);

    await expect(await scheduleADemoModal.calendlyMeetingDurationText()).toBeVisible();
  })
});
