import React, { Component } from 'react';
import './index.css';
import Login from '../Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">HackSU</p>
        </header>
        <div className="body">
					<Login />
        </div>
      </div>
    );
  }
}

export default App;
