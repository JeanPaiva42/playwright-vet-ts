import ScheduleADemoModal from "../../pageComponents/ScheduleADemoModal";
import { Page } from '@playwright/test';

export const selectAPracticeOrOrganization = async (page: Page) => {
    const scheduleADemoModal = new ScheduleADemoModal(page);
    return (await scheduleADemoModal.typeOfPracticeOrOrganization())
        .click();
}