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

  useEffect(() => {
    console.log('useEffect triggered');
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

  console.log('App rendered');

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  const handelClick = () => {
    console.log(cards);
    const shuffledCards = shuffleArray([...cards]);
    setCards(shuffledCards);
    console.log('array shoffeled');
  };

  return (
    <>
      <ScoreBoard score={score} bestScore={bestScore} />
      <GameBoard cards={cards} onClick={handelClick} />
    </>
  );
}

export default App;
