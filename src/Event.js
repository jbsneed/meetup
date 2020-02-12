import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line, Tooltip } from 'recharts';
import { WarningAlert } from './Alert';

class Event extends Component {
    state = {
        showDetails: false,
        events: [],
    }

    handleChange = () => {
        this.setState({ showDetails: !this.state.showDetails });
        const rsvpCount = this.props.event.yes_rsvp_count;
        const rsvpMax = this.props.event.rsvp_limit;
        if (rsvpCount === rsvpMax) {
            this.setState({ infoText: 'This event has 0 vacancies.' })
        } else {
            this.setState({ infoText: '' });
        }
    }

    getData = () => {
        const taken = this.props.event.yes_rsvp_count;
        const limit = this.props.event.rsvp_limit;
        const remaining = limit - this.props.event.yes_rsvp_count;

        return (
            [
                { "name": "Spots Taken", "value": taken },
                { "name": "Spots Remaining", "value": remaining }
            ]
        )
    }

    render() {
        const { event } = this.props;
        let colors = ['blue', 'green'];
        let buttonText = 'More';
        if (this.state.showDetails) {
            buttonText = 'Less';
        }
        return (
            <div className="Event">
                <div className="eventName">{event.name}</div>
                <div className="eventDate">{event.local_date}</div>
                {this.state.showDetails && (
                    <div className="eventDetails">
                        {event.yes_rsvp_count && event.rsvp_limit ?
                            <ResponsiveContainer width="99%" height="99%">
                                <PieChart width={300} height={200}>
                                    <Legend verticalAlign="top" height={36} />
                                    <Line name="Attending" type="monotone" dataKey="taken" stroke="#8884d8" />
                                    <Line name="Spots Remaining" type="monotone" dataKey="remaining" stroke="#82ca9d" />
                                    <Pie data={this.getData()} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                                        {
                                            this.getData().map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index]} />
                                            ))
                                        }
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            : null
                        }
                        <WarningAlert text={this.state.infoText} /> <br />
                        <div className="eventCity">City: {event.venue && event.venue.city}</div>
                        <div className="eventCity">State: {event.venue && event.venue.state}</div>
                        <div className="eventAddress">Address: {event.venue && event.venue.address_1}</div>
                        <div className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                        <div>  <a className="eventLink" target="_blank" rel="noopener noreferrer" href={event.link}>Event Link</a>
                        </div>
                    </div>
                )}
                <button className="detailsButton" onClick={this.handleChange}>{`${buttonText} Details`}</button>

            </div>
        );
    }
}

export default Event;