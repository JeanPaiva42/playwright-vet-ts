import BaseComponent from '../BaseComponent';

class PricingPage extends BaseComponent {

    constructor(page: any) {
        super(page)
    }

    async scheduleADemoButton() { return (await this.page.getByRole('main').getByRole('button', { name: 'Schedule a Demo', exact: true })) }

    async featuresLink() { return (await this.page.locator('div:has(a):has-text("Features")').first()) }

    async princingLink() { return (await this.page.locator('a[href="/pricing"]').first()) }

    async resourcesLink() { return (await this.page.locator('div:has(a):has-text("Resources")').first()) }

    async contactSalesButton() { return (await this.page.locator('button:has-text("Contact Sales")').first()) }

    async pricingText() { return (await this.page.locator('h1:has-text("Simple pricing that scales with you.")').first()) }

    async enterpriseSectionText() {
        return (await this
            .page.locator('h2:has-text("Easily manage all of your locations in one, centralized platform")').first())
    }




}

export default PricingPage;