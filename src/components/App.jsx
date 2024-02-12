import React, { useState, useEffect } from 'react';
import Header from './Header';
import Game from './Game';
import './styles/App.css'

const App = () => {
 
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
 
 
  return (
    <div className="app">
      <Header score={score} highScore={highScore} />
      <Game
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </div>
  );
};

export default App;