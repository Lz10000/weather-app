import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

//middleware inspects actions before sending to reducers, can manipulate it, log it or stop it
//redux promise is a middleware
export default class App extends Component {
  render() {
    return (
      <div>
          <SearchBar/>
          <WeatherList/>
      </div>
    );
  }
}
