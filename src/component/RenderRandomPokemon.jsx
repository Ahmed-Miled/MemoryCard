export default function RenderRandomPokemon({ cards, onClick }) {
  if (!cards || !cards.sprites) {
    return <p>Loading...</p>;
  }
  console.log(cards);
  

  return (
    <div className="card" key={cards.id}onClick={onClick}>
      <p> {cards.name} </p>
      {cards ? (
        <img src={cards.sprites.front_default} alt={cards.name} />
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}
