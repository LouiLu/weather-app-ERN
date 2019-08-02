import React, { Component } from 'react';
import './App.css';

// layouts
import Info from './Info/Info';
import Weather from './Weather/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <Weather />
      </div>
    );
  }
}

export default App;
