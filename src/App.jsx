import styled from 'styled-components';
import StartGame from './component/StartGame';
import { useState } from 'react';
import { GameOn } from './component/GameOn';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted(previous => !previous);
  };

  return (
   <>
    {isGameStarted ? <GameOn /> : <StartGame />}
   </>
  );
};

export default App;
