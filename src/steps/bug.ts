import { Given } from '@cucumber/cucumber';

Given(
    /^there is an element "([^"]*)" inside an element "([^"]*)"$/,
    (childSelector: string, parentSelector: string) => {
        const parentElement = $(parentSelector);
        expect(parentElement.isDisplayed()).toBeTruthy();
        expect(parentElement.$(childSelector)).toBeFalsy();
    }
);
