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
                <div className="eventName">{this.props.event.name}</div>
                <div className="eventDate">{this.props.event.local_date}</div>

                <button className="eventButton" onClick={this.handleChange}>Show Details</button>

            </div>
        );
    }

}

export default Event;