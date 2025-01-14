import React from 'react'
import TotalScore from '/src/components/TotalScore';
import SelectNumber from './SelectNumber';
import styled from "styled-components";
import DiceRoll from './DiceRoll';

const GameOn = () => {
  return (
    <MainContainer>
     <div className='top'>
      <TotalScore />
      <SelectNumber/>
     </div>
     <DiceRoll/>
    </MainContainer>
    )
}

export default GameOn

const MainContainer = styled.div`
padding-top: 100px;

.top{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
`;
