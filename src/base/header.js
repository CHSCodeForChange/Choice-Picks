import React, { Component } from 'react';
import '../index.css';
import {showThis} from './content';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <p>Carmel Clay Public Library</p>
          <button onClick = {() => this.changeScreen(0)}>Home</button>
          <button onClick = {() => this.changeScreen(1)}>Choice Picks</button>
          <button onClick = {() => this.changeScreen(2)}>Recommendations</button>
        </header>
      </div>
    );
  };

  changeScreen (num) {
    if (num === 0) {
      showThis[0] = "block";
      showThis[1] = "none";
      showThis[2] = "none";
    }
    else if (num === 1) {
      showThis[0] = "none";
      showThis[1] = "block";
      showThis[2] = "none";
    }
    else if (num === 2) {
      showThis[0] = "none";
      showThis[1] = "none";
      showThis[2] = "block";
    }
  }
}

export default Header;
