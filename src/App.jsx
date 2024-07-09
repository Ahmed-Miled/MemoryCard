import { useState } from 'react';
import './styles/App.css';
import RenderRandomPokemon from './component/RenderRandomPokemon';
import ScoreBoard from './component/ScoreBoard';
import GameBoard from './component/GameBoard';

function App() {

  return (
    <>

      {/* 
      lena lazem el structure mta3 el page 
      lazm el sharing data mel loul
      */}
      <ScoreBoard />
      <GameBoard />
    </>
  );
}

export default App;
