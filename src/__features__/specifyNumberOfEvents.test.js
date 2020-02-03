import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/__features__/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user has not specified the number of events they want shown', () => {

        });
        let AppWrapper;
        when('user opens the app', () => {
            AppWrapper = mount(<NumberOfEvents />);
        });

        then('32 events will be shown', () => {
            expect(AppWrapper.state('query')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        when('the user specifies the number of events shown', () => {
            AppWrapper.find('.eventsNumberTextbox').simulate("change", { target: { value: 10 } });
        });

        then('the number specified by user will be shown', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            expect(NumberOfEventsWrapper.state('query')).toEqual(10);
        });
    });
});