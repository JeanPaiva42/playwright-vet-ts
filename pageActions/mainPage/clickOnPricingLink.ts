import { Page } from '@playwright/test';
import PricingPage from "../../pageComponents/PricingPage";

export const clickOnPricingLink = async (page: Page) => {
    const pricingPage = new PricingPage(page);
    return (await pricingPage.princingLink())
        .click();
}