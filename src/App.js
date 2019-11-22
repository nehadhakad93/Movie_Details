import React, { Component } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Browse your movies here</h1>
        </div>
        <div className="App-intro">
          <FileExplorer />
        </div>
      </div>
    );
  }
}

export default App;
