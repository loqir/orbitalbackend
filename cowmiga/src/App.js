import './App.css';
import React, { Component } from 'react';
import Gauge from './components/Gauge';
import Counter from './components/counter';
import Create from './components/Create';
import Stock from './components/Stock';
import List from './components/List'
import AddList from './components/AddList'

class App extends Component {

  render() {
    return (
      <div classname="app">

        {/* <Stock /> */}
        <Counter />
        <Create />
        <List />
        <AddList />
        {/* <Gauge /> */}
      </div >
    );
  }
}

export default App;