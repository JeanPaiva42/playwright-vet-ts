import BaseComponent from '../BaseComponent';

class MainPage extends BaseComponent {

    constructor(page: any) {
        super(page)
    }

    async subscribeToUpdatesLink() { return (await this.page.locator('#show-updates-dropdown')) }
    async systemMetricsLink() { return (await this.page.locator('a[href="#system-metrics"]')) }
    async pastIncidentsLink() { return (await this.page.locator('a[href="#past-incidents"]')) }
}

export default MainPage;