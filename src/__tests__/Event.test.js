import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    const events =
    {
        "created": 1561164932000,
        "duration": 28800000,
        "id": "bvnscrybccbcc",
        "name": "Wine Down Tuesdays",
        "date_in_series_pattern": false,
        "status": "upcoming",
        "time": 1579644000000,
        "local_date": "2020-01-21",
        "local_time": "16:00",
        "updated": 1561164932000,
        "utc_offset": -21600000,
        "waitlist_count": 0,
        "yes_rsvp_count": 1,
        "venue": {
            "id": 26470980,
            "name": "The Lounge at Cafe J ",
            "lat": 33.57720947265625,
            "lon": -101.8732681274414,
            "repinned": true,
            "address_1": "2605 19th st",
            "address_2": "West entrance ",
            "city": "Lubbock",
            "country": "us",
            "localized_country_name": "USA",
            "zip": "79410",
            "state": "tx"
        }
    }
    beforeAll(() => {
        EventWrapper = shallow(<Event event={events} />);
    });

    test('render event container', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('render only event name and date as default', () => {
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    test('verify a show details button exists', () => {
        expect(EventWrapper.find('.eventButton')).toHaveLength(1);
    });

    test('render details when show details button is clicked', () => {
        EventWrapper.find('.eventButton').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    })

});