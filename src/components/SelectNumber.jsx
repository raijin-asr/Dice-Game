import styled from "styled-components";

const SelectNumber = () => {

    const numbersArr =[1,2,3,4,5,6]
  return (
    <div>
        {numbersArr.map((value,i)=> (
            <NumberContainer key={i}>{value}</NumberContainer>
        )
        )}
    </div>
  )
}

export default SelectNumber

const NumberContainer = styled.div`
height: 100px;
width: 80px;
border: 1px solid black;
display:grid;
place-items: center;
font-size: 25px;
`;