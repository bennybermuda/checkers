import React, {useState} from 'react';
import './App.css';
import Landing from './Landing'
import {Game} from './Game2'

function App() {
  //once we click start on the landing page, the game gets displayed and we can play
  var [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="App">

        {!gameStarted && <Landing onStart={() => setGameStarted(true)}/>}
        {!!gameStarted && <Game/>}

    </div> 
  );
}

export default App;
