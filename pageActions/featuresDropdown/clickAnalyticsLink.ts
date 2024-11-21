import FeaturesPage from "../../pageComponents/FeaturesDropdown";
import { Page } from '@playwright/test';

export const clickAnalyticsLink = async (page: Page) => {
    const featuresPage = new FeaturesPage(page);
    return (await featuresPage.analyticsLink())
        .click();
}