import { Page } from '@playwright/test';
import PricingPage from "../../pageComponents/PricingPage";

export const clickOnPricingLink = async (page: Page): Promise<void> => {
    const pricingPage = new PricingPage(page);
    const pricingLink = await pricingPage.pricingLink();
    await pricingLink.click();
}