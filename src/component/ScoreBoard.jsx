import '../styles/scoreBoard.css'
export default function ScoreBoard() {
  // on loading the page specifi number of pokemons should aper each one have onclick functionality
  return (
    <div className='scoreBoard'>
      <div className="title">Memory Game</div>
      <div className="scores">
        <div className="block text">
          <div>Curent Score: </div>
          <div className="current">0</div>
        </div>
        <div className="block text">
          <div>Best score: </div>
          <div className="best">0</div>
        </div>
      </div>
    </div>
  );
}
