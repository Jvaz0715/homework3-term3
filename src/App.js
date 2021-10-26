import React, { Component } from 'react';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';

import "./App.css";

export class App extends Component {
  state = {
    counter: 0,
  }

  removeOnClick = () => {
    console.log("remove one star clicked");
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      })
    }
  };

  addOnClick = () => {
    console.log("add one star clicked");
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {

    return (
      <div>
        <Header />
        <Counter
          counter={this.state.counter}
          removeOnClick={this.removeOnClick}
          addOnClick={this.addOnClick}
        />
      </div>
    )
  }
}

export default App;
