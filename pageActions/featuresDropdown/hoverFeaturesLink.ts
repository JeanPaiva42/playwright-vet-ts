import MainPage from "../../pageComponents/MainPage";
import { Page } from '@playwright/test';

export const hoverFeaturesLink = async (page: Page): Promise<void> => {
    const mainPage = new MainPage(page);
    const featuresLink = await mainPage.featuresLink();
    await featuresLink.hover();
}