import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';

const feature = loadFeature('./src/__features__/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;

        given('the user has selected a city', () => {

        });

        when('the user is viewing the events of selected city', () => {
            AppWrapper = mount(<App />);
        });

        then('the event name will be shown and the details will be collapsed', () => {
            expect(AppWrapper.find('showDetails')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;

        given('the list of events has been loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('user clicks on “Show Details” button for an event', () => {
            AppWrapper.update();
            AppWrapper.find('.Event .detailsButton').at(0).simulate('click');

        });

        then('the event element will be expanded to show the event details', () => {
            expect(AppWrapper.find('.Event .eventDetails')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        and('the event details are showing', () => {
            AppWrapper.update();
            AppWrapper.find('.detailsButton').at(0).simulate('click');
            expect(AppWrapper.find('.eventDetails')).toHaveLength(1);
        });

        when('the user clicks on event details button again', () => {
            AppWrapper.find('.detailsButton').at(0).simulate('click');
        });

        then('the event details should collapse', () => {
            expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
        });
    });

})