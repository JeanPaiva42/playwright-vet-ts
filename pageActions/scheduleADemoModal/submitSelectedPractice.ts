import ScheduleADemoModal from "../../pageComponents/ScheduleADemoModal";
import { Page } from '@playwright/test';

export const submitSelectedPractice = async (page: Page): Promise<void> => {
    const scheduleADemoModal = new ScheduleADemoModal(page);
    const submitPracticeButton = await scheduleADemoModal.submitPracticeButton();
    await submitPracticeButton.click();
}