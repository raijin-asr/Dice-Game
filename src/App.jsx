import StartGame from './components/StartGame';
import { useState } from 'react';
import GameOn from './components/GameOn';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGame = () => {
    setIsGameStarted(previous => !previous);
  };

  return (
   <>
    {isGameStarted ? <GameOn /> : <StartGame toggle={toggleGame}/>}
   </>
  );
};

export default App;
