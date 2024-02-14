import React from 'react';

const Header = ({ score, highScore }) => {
  return (
    <div className="header">
      <h1>Memory Card</h1>
      <p>Try not to click an image more than once!</p>
      <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Header;