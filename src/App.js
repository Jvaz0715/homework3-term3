import React, { Component } from 'react';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import Stars from './components/Stars/Stars';

import "./App.css";

export class App extends Component {
  state = {
    counter: 0,
    starsArray: [],
  }

  removeOnClick = () => {
    console.log("remove one star clicked");
    if (this.state.counter > 0) {
      let lessStarsArray = [...this.state.starsArray];
      lessStarsArray.pop();
      this.setState({
        counter: this.state.counter - 1,
        starsArray: lessStarsArray,
      })
    }
  };

  addOnClick = () => {
    console.log("add one star clicked");
    let moreStarsArray = [...this.state.starsArray, "star"];
  
    this.setState({
      counter: this.state.counter + 1,
      starsArray: moreStarsArray,
    })
  }

  clearAllOnClick = () => {
    this.setState({
      counter: 0,
      starsArray: [],
    });
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
        <Stars 
          starsArray={this.state.starsArray}
          clearAllOnClick={this.clearAllOnClick}
        />
      </div>
    )
  }
}

export default App;
