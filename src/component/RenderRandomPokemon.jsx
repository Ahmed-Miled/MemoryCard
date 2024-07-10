export default function RenderRandomPokemon({
  cards,
  onClick,
  setChosenCards,
  setScore,
  chosenCards,
  bestScore,
  setBestScore,
}) {
  if (!cards || !cards.sprites) {
    return (
      <div className='loading'>
        <div className='loading-spinner'></div>
      </div>
    );
  }
  const handelClick = (e) => {
    const key = e.currentTarget.dataset.key;
    if (!chosenCards.includes(key)) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
      setChosenCards((prev) => [...prev, key]);
    } else {
      setScore(0);
      setChosenCards([]);
    }

    onClick();
  };
  return (
    <div
      className='card'
      key={cards.id}
      data-key={cards.id}
      onClick={handelClick}
    >
      <p> {cards.name} </p>
      {cards ? (
        <img src={cards.sprites.front_default} alt={cards.name} />
      ) : (
        <div className='loading'>
          <div className='loading-spinner'></div>
        </div>
      )}
    </div>
  );
}
