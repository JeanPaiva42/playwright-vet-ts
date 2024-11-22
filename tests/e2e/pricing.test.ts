import { userAttemptsTo } from "../../pageActions/index";
import MainPage from "../../pageComponents/MainPage";
import PricingPage from "../../pageComponents/PricingPage";
import { test, expect } from '@playwright/test';

var mainPage: MainPage;
const baseUrl: string = 'https://vetspire.com/';
const pricingUrl: string = baseUrl + 'pricing';
test.describe('Verifies the Pricing link', async () => {

  test('confirms that users are taken to the Pricing page', async ({ page }) => {


    await page.goto(baseUrl);

    await userAttemptsTo.clickOnPricingLink(page);
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveURL(pricingUrl);
  })
});

test.describe('Verifications on the pricing page', async () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await page.goto(pricingUrl);
  });

  test('confirms that page content correctly loads', async ({ page }) => {
    const pricingText: string = 'Simple pricing that scales with you.';
    // we don't need a perfect text match
    const enterpriseText: string = 'Easily manage all of your locations in one';
    const pricingPage: PricingPage = new PricingPage(page);

    await expect(await pricingPage.pricingText()).toContainText(pricingText);
    expect(await pricingPage.enterpriseSectionText()).toContainText(enterpriseText);
  });

  test('confirms that "Contact Sales" button has a mailto: link', async ({ page }) => {
    var pricingPage: PricingPage = new PricingPage(page);
    const emailButtonLink: string = `window.open(\"mailto:`;

    const contactSalesClickLink = await (await pricingPage.contactSalesButton()).getAttribute('@click');

    expect(contactSalesClickLink).toContain(emailButtonLink);
  });
});
