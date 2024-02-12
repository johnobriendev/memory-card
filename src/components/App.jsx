import React from 'react';
import Header from './Header';
import Game from './Game';
import './styles/App.css'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Game />
    </div>
  );
};

export default App;