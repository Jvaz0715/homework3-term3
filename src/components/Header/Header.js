import React, { Component } from 'react';
import "./Header.css";

export class Header extends Component {
   render() {
      return (
         <div className="header">
            <div className="logo">
               <h3>Logo</h3>
            </div>
            <div className="menu">
               <h3>menu</h3>
            </div>
         </div>
      )
   }
}

export default Header;
