import MainPage from "../../pageComponents/MainPage";
import { Page } from '@playwright/test';

export const clickOnScheduleADemoButton = async (page: Page) => {
    const mainPage = new MainPage(page);
    return (await mainPage.scheduleADemoButton())
        .click();
}