import React, { Component } from 'react';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Counter />
      </div>
    )
  }
}

export default App;
