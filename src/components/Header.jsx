import React from 'react';

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Header;