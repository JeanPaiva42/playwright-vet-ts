import BaseComponent from '../BaseComponent';

class MainPage extends BaseComponent {

    constructor(page: any) {
        super(page)
    }

    async scheduleADemoButton() { return (await this.page.getByRole('main').getByRole('button', { name: 'Schedule a Demo', exact: true })) }

    async featuresLink() { return (await this.page.getByRole('link', { name: 'Features' }).first()) }

    async princingLink() { return (await this.page.locator('a[href="/pricing"]').first()) }

    async resourcesLink() { return (await this.page.locator('div:has(a):has-text("Resources")').first()) }

}

export default MainPage;