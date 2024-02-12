import React, { useState, useEffect } from 'react';
import Card from './Card';

const Game = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Function to initialize cards
  const initializeCards = () => {
    const initialCards = Array.from({ length: 5 }, (_, index) => ({
      id: index,
      number: index + 1,
      isClicked: false,
    }));
    setCards(initialCards);
  };

  // Function to shuffle cards (Fisher-Yates)
  const shuffleCards = () => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCards(shuffledCards);
  };

  // Function to handle card click
  const handleCardClick = (clickedCard) => {
    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, clicked: true } : card
    );
    setCards(updatedCards);

    if (!clickedCard.clicked) {
      // Card hasn't been clicked before
      setScore(score + 1);
      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
      shuffleCards();
    } else {
      // Card has been clicked before, game over
      setScore(0);
      setCards(cards.map((card) => ({ ...card, clicked: false })));
      shuffleCards();
    }
  };


  useEffect(() => {
    initializeCards();
  }, []);

  return (
    <div className="game">
      {cards.map((card) => (
        <Card
          key={card.id}
          number={card.number}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Game;

