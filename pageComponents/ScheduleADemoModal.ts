import { Page } from 'playwright-core';
import BaseComponent from '../BaseComponent';

class scheduleADemoModal extends BaseComponent {

    iframeLocation: string = 'iframe[title="Select a Date \\& Time - Calendly"]';

    constructor(page: Page) {
        super(page)
    }

    async typeOfPracticeOrOrganization(): Promise<Locator> {
        return (await this.page.locator(this.iframeLocation)
            .contentFrame().getByLabel('What is the type of your'))
    }

    async dropdownOptions(userChoice: string): Promise<Locator> {
        return (await this.page
            .locator(this.iframeLocation).contentFrame()
            .getByRole('option', { name: userChoice })).first()
    }

    async demoModalTitle(): Promise<Locator> {
        return (await (this.page.locator('has(div):(has-text("Vetspire Demo"))')).first())
    }

    async submitPracticeButton(): Promise<Locator> {

        return (await (this.page.locator(this.iframeLocation)
            .contentFrame().getByRole('button', { name: 'Submit' })).first())
    }

    // not really a button, but...
    async closeModalButton(): Promise<Locator> {
        return (await (this.page.locator('div .calendly-popup-close')).first())
    }

    async calendlyMeetingDurationText(): Promise<Locator> {
        return (await (this.page.locator(this.iframeLocation)
            .contentFrame().getByText('1 hr')).first())
    }

}

export default scheduleADemoModal;