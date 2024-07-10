import { useEffect, useState } from 'react';
import './styles/App.css';
import ScoreBoard from './component/ScoreBoard';
import GameBoard from './component/GameBoard';
import FetchCards from './component/FetchCards';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [chosenCards, setChosenCards] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardData = await FetchCards();
        setCards(cardData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <div className='loading-spinner'></div>
      </div>
    );
  }

  const handelClick = () => {
    const shuffledCards = shuffleArray([...cards]);
    setCards(shuffledCards);
  };

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore} />
      <GameBoard
        cards={cards}
        onClick={handelClick}
        setChosenCards={setChosenCards}
        chosenCards={chosenCards}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
