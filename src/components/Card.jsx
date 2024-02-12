import React from 'react';

const Card = ({ number, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <p>{number}</p>
    </div>
  );
};

export default Card;