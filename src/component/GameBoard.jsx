import RenderRandomPokemon from './RenderRandomPokemon';
import '../styles/GameBoard.css';

export default function GameBoard({ cards, onClick }) {
  // on loading the page specifi number of pokemons should
  // aper each one have onclick functionality

  return (
    <div className='gameBoard'>
      {cards.map((card, index) => {
        console.log(cards);
        return <RenderRandomPokemon key={index} cards={card} onClick={onClick}/>;
      })}
    </div>
  );
}
