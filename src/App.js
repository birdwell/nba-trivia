import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import GuessPlayer from './components/guess-player/GuessPlayer';
import Mode from './components/mode/Mode';
import Info from './components/mode/Info';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: ''
    };
  }

  onSelect = (mode) => {
    this.setState({
      mode
    });
  }

  reset = () => {
    this.setState({
      mode: ''
    });
  }

  render() {
    const { mode } = this.state;

    return (
      <div className="App">
        {mode !== '' && <Info reset={this.reset} mode={mode} />}
        {mode === '' && <Mode onSelect={this.onSelect} />}
        {mode !== '' && <GuessPlayer firebase={firebase} mode={mode} />}
      </div>
    );
  }
}

export default App;
