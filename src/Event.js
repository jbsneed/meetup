import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false,
        events: [],
    }

    handleChange = () => {
        if (this.state.showDetails === false) {
            this.setState({ showDetails: true });
        } else {
            this.setState({ showDetails: false });
        }
    }
    render() {
        const event = this.props.event;
        return (
            <div className="event">
                <p className="eventName">{event.name}</p>
                <p className="eventDate">{event.local_date}</p>
                <p className="groupName">{event.group.name}</p>
                <p className="rsvp">{event.yes_rsvp_count} people attending</p>


                <button className="eventButton" onClick={this.handleChange}>Show Details</button>

            </div>
        );
    }

}

export default Event;