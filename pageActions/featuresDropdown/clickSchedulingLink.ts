import FeaturesPage from "../../pageComponents/FeaturesDropdown";
import { Page } from '@playwright/test';

export const clickSchedulingLink = async (page: Page) => {
    const featuresPage = new FeaturesPage(page);
    return (await featuresPage.schedulingLink())
        .click();
}