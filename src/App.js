import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {
  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
    window.addEventListener('offline', this.OfflineAlert());
  }

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    offlineText: '',
  };

  OfflineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText: 'You do not have internet connection. This list is cached from your previous visit. Please connect to the internet.'
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response =>
        this.setState({ events: response, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response =>
        this.setState({ events: response, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response =>
        this.setState({ events: response })
      );
    }
  };

  render() {
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents}
          query={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon}
        />

      </div>
    );
  }
}

export default App;
