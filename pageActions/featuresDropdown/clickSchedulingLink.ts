import FeaturesPage from "../../pageComponents/FeaturesDropdown";
import { Page } from '@playwright/test';

export const clickSchedulingLink = async (page: Page): Promise<void> => {
    const featuresPage = new FeaturesPage(page);
    const schedulingLink = await featuresPage.schedulingLink();
    await schedulingLink.click();
}