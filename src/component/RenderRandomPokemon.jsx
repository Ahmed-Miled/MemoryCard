import { useState } from 'react';
export default function RenderRandomPokemon() {
  const [pokemon, setPokemon] = useState(null);
  // using promise other than awaut function cloud be beneficial
  // promise exemple ==> .then(promise => promise.json()).then((data) => {console.log(data)}).catch((err) => {console.log(err)});
  const getRandomImage = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    setPokemon(data);
  };
  return (
    <>
      <p> this is from RenderRandomPokemon.jsx </p>
      {/* pokemon.source ? <img src={pokemon.sprites.front_default} alt={pokemon.name} /> : <p>No pokemon selected</p> */}
    </>
  );
}
