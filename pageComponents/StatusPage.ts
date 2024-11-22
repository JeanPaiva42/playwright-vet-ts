import { Locator, Page } from 'playwright-core';
import BaseComponent from '../BaseComponent';

class MainPage extends BaseComponent {

    constructor(page: Page) {
        super(page)
    }

    async subscribeToUpdatesLink(): Promise<Locator> {
        return this.page.locator('#show-updates-dropdown')
    }

    async systemMetricsLink(): Promise<Locator> {
        return this.page.locator('a[href="#system-metrics"]')
    }

    async pastIncidentsLink(): Promise<Locator> {
        return this.page.locator('a[href="#past-incidents"]')
    }
}

export default MainPage;