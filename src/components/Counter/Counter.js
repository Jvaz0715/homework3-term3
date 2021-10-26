import React, { Component } from 'react';
import "./Counter.css";

export class Counter extends Component {
   render() {
      return (
         <div className="counter-container">
            <button className="remove-button">Remove 1</button>
            <h4>0</h4>
            <button className="add-button">Add 1</button>
         </div>
      )
   }
}

export default Counter;
