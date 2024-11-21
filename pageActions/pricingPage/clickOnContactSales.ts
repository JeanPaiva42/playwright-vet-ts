import MainPage from "../../pageComponents/MainPage";
import { Page } from '@playwright/test';
import PricingPage from "../../pageComponents/PricingPage";




export const clickOnContactSales = async (page: Page) => {
    const pricingPage = new PricingPage(page);
    return (await pricingPage.contactSalesButton())
        .click();
}