import React, { Component } from 'react';
import "./Counter.css";

export class Counter extends Component {
   render() {
      // console.log(this.props.removeOnClick)
      return (
         <div className="counter-container">
            <button className="remove-button" onClick={this.props.removeOnClick}>Remove 1</button>
            <h4>{this.props.counter}</h4>
            <button className="add-button" onClick={this.props.addOnClick}>Add 1</button>
         </div>
      )
   }
}

export default Counter;
