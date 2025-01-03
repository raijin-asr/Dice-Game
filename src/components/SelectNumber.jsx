import styled from "styled-components";
import { useState } from 'react';

const SelectNumber = () => {

    const numbersArr =[1,2,3,4,5,6]
    const [selectedNumbers, setSelectedNumbers] = useState()

  return (
    <NumberContainer>
      <div className="flex">
          {numbersArr.map((value,i)=> (
            <Box 
              isSelected = {value == selectedNumbers}
              key={i}
              onClick={()=> setSelectedNumbers(value)}  
            >{value}
            </Box>
          )
          )}
      </div>
      <p>Selected Number: </p>
    </NumberContainer>
  )
}

export default SelectNumber

const NumberContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.flex{
  display:flex;
  gap:25px;;
}

p{
  font-size: 20px;
  font-weight: 500;
  }
`;

const Box = styled.div`
height: 100px;
width: 80px;
border: 1px solid black;
display:grid;
place-items: center;
font-size: 25px;
font-weight: 500;
background-color: ${props => props.isSelected ? 'black' : 'white'};
color: ${props => props.isSelected ? 'white' : 'black'};
`;