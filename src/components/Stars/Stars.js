import React, { Component } from 'react';
import Star from "./star.png";
import "./Stars.css";

export class Stars extends Component {
   
   render() {
      console.log(this.props.starsArray)
      return (
         <div className="stars-container">
            <ul>
               {this.props.starsArray.map((item) => {
                  return (
                     <li><img src={Star} alt="star" className="stars"/></li>
                  )
               })}
            </ul>
         </div>
      )
   }
}

export default Stars;
