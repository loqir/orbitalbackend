import './App.css';
import React, { Component } from 'react';
import Gauge from './components/Gauge';
import Counter from './components/counter';
import Create from './components/Create';
import Stock from './components/Stock';
import List from './components/List'

class App extends Component {

  render() {
    return (
      <div classname="app">
        {/* <Stock /> */}
        <Counter />
        <Create />
        <List />
        {/* <Gauge /> */}
      </div>
    );
  }
}

export default App;