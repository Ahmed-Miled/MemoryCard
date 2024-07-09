import '../styles/scoreBoard.css';
export default function ScoreBoard({ score, bestScore}) {
  return (
    <div className='scoreBoard'>
      <div className='title'>Memory Game</div>
      <div className='scores'>
        <div className='text'>
          <div>Curent Score: {score}</div>
        </div>
        <div className='text'>
          <div>Best score: {bestScore}</div>
        </div>
      </div>
    </div>
  );
}
