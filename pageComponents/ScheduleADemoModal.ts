import BaseComponent from '../BaseComponent';

class scheduleADemoModal extends BaseComponent {

    iframeLocation: string = 'iframe[title="Select a Date \\& Time - Calendly"]';

    constructor(page: any) {
        super(page)
    }

    async typeOfPracticeOrOrganization() {
        return (await this.page.locator(this.iframeLocation)
            .contentFrame().getByLabel('What is the type of your'))
    }

    async dropdownOptions(userChoice: string) {
        return (await this.page
            .locator(this.iframeLocation).contentFrame()
            .getByRole('option', { name: userChoice })).first()
    }

    async demoModalTitle() {
        return (await (this.page.locator('has(div):(has-text("Vetspire Demo"))')).first())
    }

    async submitPracticeButton() {

        return (await (this.page.locator(this.iframeLocation)
            .contentFrame().getByRole('button', { name: 'Submit' })).first())
    }

    // not really a button, but...
    async closeModalButton() {
        return (await (this.page.locator('div .calendly-popup-close')).first())
    }

    async calendlyMeetingDurationText() {
        return (await (this.page.locator(this.iframeLocation)
            .contentFrame().getByText('1 hr')).first())
    }


    // // Verify the selection
    // const selectedValue = await page.$eval('select#dropdownId', select => select.value);
    // expect(selectedValue).toBe('value1');
    // });
}

export default scheduleADemoModal;