import React from 'react'
import TotalScore from '/src/components/TotalScore';
import SelectNumber from './SelectNumber';
import styled from "styled-components";

const GameOn = () => {
  return (
    <MainContainer>
     <div className='top'>
      <TotalScore />
      <SelectNumber/>
     </div>
    </MainContainer>
    )
}

export default GameOn

const MainContainer = styled.div`
.top{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
`;
