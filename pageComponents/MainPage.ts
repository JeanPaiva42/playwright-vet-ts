import { Locator, Page } from 'playwright-core';
import BaseComponent from '../BaseComponent';

class MainPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async scheduleADemoButton(): Promise<Locator> {
        return (await this.page.getByRole('main').getByRole('button', { name: 'Schedule a Demo', exact: true }))
    }

    async featuresLink(): Promise<Locator> {
        return (await this.page.getByRole('link', { name: 'Features' }).first())
    }

    async pricingLink(): Promise<Locator> {
        return (await this.page.locator('a[href="/pricing"]').first())
    }

    async resourcesLink(): Promise<Locator> {
        return (await this.page.locator('div:has(a):has-text("Resources")').first())
    }

}

export default MainPage;