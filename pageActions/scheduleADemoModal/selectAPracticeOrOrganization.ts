import ScheduleADemoModal from "../../pageComponents/ScheduleADemoModal";
import { Page } from '@playwright/test';

export const selectAPracticeOrOrganization = async (page: Page): Promise<void> => {
    const scheduleADemoModal = new ScheduleADemoModal(page);
    const typeOfPracticeOrOrganization = await scheduleADemoModal.typeOfPracticeOrOrganization();
    await typeOfPracticeOrOrganization.click();
}