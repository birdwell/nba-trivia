import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import GuessPlayer from './components/guess-player/GuessPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GuessPlayer firebase={firebase} />
      </div>
    );
  }
}

export default App;
