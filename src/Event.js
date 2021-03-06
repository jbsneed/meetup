import React, { Component } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Line, Tooltip } from 'recharts';
import { WarningAlert } from './Alert';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        }
    }

    handleChange = () => {
        if (!this.state.showDetails) {
            this.setState({ showDetails: true });
        } else {
            this.setState({ showDetails: false });
        }
    }

    getData = () => {
        const { event } = this.props;
        const taken = event.yes_rsvp_count;
        const remaining = event.rsvp_limit - taken;

        return (
            [
                { name: "Spots Taken", value: taken },
                { name: "Spots Remaining", value: remaining }
            ]
        )
    }

    render() {
        const { event } = this.props;
        let colors = ["#e34542", "#43e06d"]
        let buttonText = 'More';
        if (this.state.showDetails) {
            buttonText = 'Less';
        }
        return (
            <div className="Event">
                <div className="eventName">{event.name}</div>
                <div className="eventDate">{event.local_time + "-" + event.local_date}</div>
                {this.state.showDetails && (
                    <div className="eventDetails">
                        <hr />
                        {this.props.event.rsvp_limit ? (
                            <ResponsiveContainer height={600} width={400}>
                                <PieChart width={300} height={200}>
                                    <Pie data={this.getData()} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                                        {
                                            this.getData().map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index]} />
                                            ))
                                        }
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36}>
                                        <Line name="Attending" type="monotone" dataKey="taken" stroke="#8884d8" />
                                        <Line name="Remaining" type="monotone" dataKey="remaining" stroke="#82ca9d" />
                                    </Legend>
                                </PieChart>
                            </ResponsiveContainer>
                        ) : null

                        }
                        <WarningAlert text={this.state.infoText} /> <br />
                        <div className="eventCity">City: {event.venue && event.venue.city}</div>
                        <div className="eventCity">State: {event.venue && event.venue.state}</div>
                        <div className="eventAddress">Address: {event.venue && event.venue.address_1}</div>
                        <div className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }}></div>
                        <div>  <a className="eventLink" target="_blank" rel="noopener noreferrer" href={event.link}>Event Link</a><br />
                        </div>
                    </div>
                )}
                <button className="detailsButton" onClick={this.handleChange}>{`${buttonText} Details`}</button>

            </div>
        );
    }
}

export default Event;