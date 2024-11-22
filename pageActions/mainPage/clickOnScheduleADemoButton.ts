import MainPage from "../../pageComponents/MainPage";
import { Page } from '@playwright/test';

export const clickOnScheduleADemoButton = async (page: Page): Promise<void> => {
    const mainPage = new MainPage(page);
    const scheduleADemoButton = await mainPage.scheduleADemoButton();
    await scheduleADemoButton.click();
}