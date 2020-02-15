import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      lat: null,
      lon: null,
      page: null,
      offlineText: '',
    };
  }
  componentDidMount() {
    getEvents().then(response => this.setState({ events: response }));
    window.addEventListener('offline', this.OfflineAlert());
  }


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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = [];
    const currentDate = moment();
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days');
      const dateString = currentDate.format('YYYY-MM-DD');
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count });
    }
    return next7Days;
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
        <NumberOfEvents updateEvents={this.updateEvents}
          query={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <ResponsiveContainer height={400}>
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
