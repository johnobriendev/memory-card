import React from 'react';

const Card = ({ imageUrl, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
         <img src={imageUrl} />
    </div>
  );
};

export default Card;