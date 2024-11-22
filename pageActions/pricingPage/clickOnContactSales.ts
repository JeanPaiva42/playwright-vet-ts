import MainPage from "../../pageComponents/MainPage";
import { Page } from '@playwright/test';
import PricingPage from "../../pageComponents/PricingPage";




export const clickOnContactSales = async (page: Page): Promise<void> => {
    const pricingPage = new PricingPage(page);
    const contactSalesButton = await pricingPage.contactSalesButton();
    await contactSalesButton.click();
}