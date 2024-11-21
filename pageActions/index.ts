import { userAttemptsTo as mainPageActions } from './mainPage';
import { userAttemptsTo as featuresDropdownActions } from './featuresDropdown';
import { userAttemptsTo as pricingPageActions } from './pricingPage';
import { userAttemptsTo as scheduleADemoModalActions } from './scheduleADemoModal';

export const userAttemptsTo = {
    ...featuresDropdownActions,
    ...mainPageActions,
    ...pricingPageActions,
    ...scheduleADemoModalActions
};