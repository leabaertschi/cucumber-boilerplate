import { Given } from '@cucumber/cucumber';

// eslint-disable-next-line require-jsdoc
function refreshSafe(fn: () => void) {
    browser.waitUntil(() => {
        try {
            fn();
            return true;
        } catch (_) {
            return false;
        }
    });
}

Given(
    /^there is an element "([^"]*)" inside an element "([^"]*)"$/,
    (childSelector: string, parentSelector: string) => {
        let retry = 0;
        refreshSafe(() => {
            retry += 1;
            const parentElement = $(parentSelector);
            expect(parentElement.isDisplayed()).toBeTruthy();

            $(retry > 5 ? parentSelector : `${parentSelector}foo`).$(childSelector);
        });
    }
);
