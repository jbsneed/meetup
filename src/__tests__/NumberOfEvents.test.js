import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberofEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    test('render events container', () => {
        expect(NumberOfEventsWrapper.find('.events')).toHaveLength(1);
    });

    test('default number of events per page is 32', () => {
        expect(NumberOfEventsWrapper.state('query')).toBe(32);
    });

    test('textbox available to specify how many events are shown', () => {
        expect(NumberOfEventsWrapper.find('.eventsNumberTextbox')).toHaveLength(1);
    });

    test('test handleInputChanged', () => {
        const eventObject = { target: { value: 10 } };
        NumberOfEventsWrapper.find('.eventsNumberTextbox').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe(10);
    });

});