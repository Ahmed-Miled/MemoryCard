import RenderRandomPokemon from './RenderRandomPokemon';
import '../styles/GameBoard.css';

export default function GameBoard({
  cards,
  onClick,
  setChosenCards,
  setScore,
  chosenCards,
  bestScore,
  setBestScore,
}) {
  return (
    <div className='gameBoard'>
      {cards.map((card, index) => {
        return (
          <RenderRandomPokemon
            key={index}
            cards={card}
            onClick={onClick}
            setChosenCards={setChosenCards}
            setScore={setScore}
            chosenCards={chosenCards}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        );
      })}
    </div>
  );
}
