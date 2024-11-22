import ScheduleADemoModal from "../../pageComponents/ScheduleADemoModal";
import { Page } from '@playwright/test';

export const chooseAPractice = async (page: Page, practiceOption: string): Promise<void> => {
    const scheduleADemoModal = new ScheduleADemoModal(page);
    const selectedDropdownOption = await scheduleADemoModal.dropdownOptions(practiceOption);
    await selectedDropdownOption.click();
}