import React, { Component } from 'react';
import './App.css';
import Cardstack from '../Cardstack/Cardstack';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  
  render() {
    return (
      <div className="App">
        <Cardstack />
      </div>
    );
  }
}

export default App;