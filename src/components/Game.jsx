import React, { useState, useEffect } from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const accessKey = 'O18jRphXwU1AUPHtLDA-FyoTenR82ZTgHDYRl4e0nws';

let cardArr  = [
    { imageName: 'nature', id: 1 },
    { imageName: 'golf', id: 2 },
    { imageName: 'car', id: 3 },
    { imageName: 'baseball', id: 4 },
    { imageName: 'hat', id: 5 },
];

const Game = ({ score, setScore, highScore, setHighScore }) => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    initializeCards();
    }, []);

    // Function to fetch images from Unsplash API
    const fetchImage = async (imageName) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${imageName}&client_id=${accessKey}`);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        return data.results[randomIndex].urls.small; // Randomly choose a result

        //return data.results[0].urls.regular; // Assuming first result is used
    };

    // Function to initialize cards
    const initializeCards = async () => {
        setIsLoading(true);
        const initialCards = await Promise.all(
            cardArr.map(async (card) => ({
                ...card,
                clicked: false,
                imageUrl: await fetchImage(card.imageName),
            }))
        );

        setCards(shuffleCards(initialCards));
        setScore(0);
        setIsLoading(false);
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
      {isLoading ? (
        <p>Loading images...</p>
      ) : (
         cards.map((card) => (
            <Card
            key={uuidv4()}
            imageUrl={card.imageUrl}
            // number={card.number}
            clicked={card.clicked}
            onClick={() => handleCardClick(card)}
            />
        ))
      )}
    </div>
  );
};

export default Game;

