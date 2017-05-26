import React, { Component } from 'react';
import './App.css';
import Game from './Game.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to ColorGame!</h1>
	<h3>The objective of the game</h3>
	<p>The objective of this game is to pick the wrong pair. A pair is constructed up of text (which will be the name of a color), and a color.<br/>
The text will be in this color. if the text doesn't match with the color, pick that color. If you picked the pair that doesn't match, you won!<br/>
If you picked a pair that matches, you lost.</p>
        <Game/>
      </div>
    );
  }
}

export default App;
