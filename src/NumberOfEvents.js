import React, { Component } from 'react';

import { ErrorAlert } from './Alert';


class NumberOfEvents extends Component {
    state = {
        query: 32, //default number of events shown
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });

        if (value <= 0) {
            this.setState({
                infoText: 'You gotta search for at least one thing!'
            });
        } else {
            this.setState({
                infoText: ''
            })

            this.props.updateEvents(null, null, value);
        }
    }

    render() {
        return (
            <div className="events">
                <div className="alertMessage">
                    <ErrorAlert text={this.state.infoText} />
                </div>
                <input
                    type="number"
                    className="eventsNumberTextbox"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    placeholder="Default number is 32"
                />
            </div>
        );
    }
}

export default NumberOfEvents;