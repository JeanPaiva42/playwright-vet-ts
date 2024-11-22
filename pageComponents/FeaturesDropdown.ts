import { Page } from 'playwright-core';
import BaseComponent from '../BaseComponent';

class FeaturesDropdown extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async getRoleByLinks(linkName: string): Promise<Locator> {
        return this.page.getByRole('link', { name: linkName }).first();
    }
    async featuresHeaderLink(): Promise<Locator> {
        return (this.page.locator('div:has(a):has-text("Features")').first())
    }

    async schedulingLink(): Promise<Locator> {
        return this.getRoleByLinks('Scheduling Appointment')
    }

    async analyticsLink(): Promise<Locator> {
        return this.getRoleByLinks('Analytics Financial reporting')
    }

    async patientFlowLink(): Promise<Locator> {
        return this.getRoleByLinks('Patient Flow Manage your')
    }
}

export default FeaturesDropdown;