import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
        events: [],
    }

    handleChange = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }
    render() {
        const event = this.props.event;
        return (
            <div className="Event">
                <div className="eventName">{event.name}</div>
                <div className="eventDate">{event.local_date}</div>

                <button className="detailsButton" onClick={this.handleChange}>Show Details</button>

                {this.state.showDetails && (
                    <div className="eventDetails">
                        <div className="eventCity">City: {event.venue && event.venue.city}</div>
                        <div className="eventCity">State: {event.venue && event.venue.state}</div>
                        <div className="eventDescription">Description: {event.description}</div>
                    </div>
                )}

            </div>
        );
    }

}

export default Event;