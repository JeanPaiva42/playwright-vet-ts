import ScheduleADemoModal from "../../pageComponents/ScheduleADemoModal";
import { Page } from '@playwright/test';

export const chooseAPractice = async (page: Page, practiceOption: string) => {
    const scheduleADemoModal = new ScheduleADemoModal(page);
    return (await scheduleADemoModal.dropdownOptions(practiceOption))
        .click();
}