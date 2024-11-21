import BaseComponent from '../BaseComponent';

class FeaturesDropdown extends BaseComponent {

    constructor(page: any) {
        super(page)
    }

    async featuresLink() { return (await this.page.locator('div:has(a):has-text("Features")').first()) }

    async schedulingLink() { return (await this.page.getByRole('link', { name: 'Scheduling Appointment' })).first() }

    async analyticsLink() { return (await this.page.getByRole('link', { name: 'Analytics Financial reporting' })).first() }

    async patientFlowLink() { return (await this.page.getByRole('link', { name: 'Patient Flow Manage your' })).first() }
}

export default FeaturesDropdown;