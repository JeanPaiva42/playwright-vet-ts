import FeaturesPage from "../../pageComponents/FeaturesDropdown";
import { Page } from '@playwright/test';

export const clickAnalyticsLink = async (page: Page): Promise<void> => {
    const featuresPage = new FeaturesPage(page);
    const analyticsLink = await featuresPage.analyticsLink();
    await analyticsLink.click();
}