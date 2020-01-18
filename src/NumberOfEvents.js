import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        query: 32, //default number of events shown
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
    }

    render() {
        return (
            <div className="events">
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