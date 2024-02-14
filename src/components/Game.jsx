import React, { useState, useEffect } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';


let cardArr  = [1, 2, 3, 4, 5, 6];

const Game = ({ score, setScore, highScore, setHighScore }) => {
  const [cards, setCards] = useState([]);
//    const [score, setScore] = useState(0);
//    const [highScore, setHighScore] = useState(0);
   //const [selectedCards, setSelectedCards] = useState([]);

   useEffect(() => {
    initializeCards();
  }, []);

  // Function to initialize cards
  const initializeCards = () => {
    const initialCards = cardArr.map((card, index) => ({
        ...card,
        id: index,
      number: index + 1,
      clicked: false,
    }));

    setCards(shuffleCards(initialCards));
    //setSelectedCards([]);
    setScore(0);
    //shuffleCards(initialCards);
    //setCards(initialCards);

  };

      // Function to shuffle cards (Fisher-Yates)
      const shuffleCards = (cardArr) => {
        const shuffledCards = [...cardArr];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        //setCards(shuffledCards);
        return shuffledCards;
      };

    // const shuffleCards = (cardArr) => {
    //         return [...cardArr].sort(() => Math.random() - 0.5);
    // };

    //Function to handle card click
    const handleCardClick = (clickedCard) => {
        const updatedCards = cards.map((card) =>
        card.id === clickedCard.id ? { ...card, clicked: true } : card
        );
        setCards(updatedCards);

        if (!clickedCard.clicked) {
        //Card hasn't been clicked before
        let newScore = score + 1;
        setScore(newScore);
        
        if (newScore > highScore) {
            setHighScore(newScore);
        }
        //shuffleCards();
        setCards(shuffleCards(updatedCards));

        } else {
        // Card has been clicked before, game over
        // setScore(0);
        // setCards(cards.map((card) => ({ ...card, clicked: false })));
        // shuffleCards();
            console.log("card has been clicked before");
            initializeCards();
        }
    };





  return (
    <div className="game">
      {cards.map((card) => (
        <Card
          key={uuidv4()}
          number={card.number}
          clicked={card.clicked}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Game;

