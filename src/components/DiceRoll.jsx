import styled from 'styled-components';

const DiceRoll=() => {
  return (
    <DiceContainer>
        <div className='diceImg'>
            <img src="/images/dice6.png"/>
        </div>
        <p>Click to roll Dice</p>
    </DiceContainer>
  )
}

export default DiceRoll;

const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

.diceImg{
cursor:pointer;

}

.diceImg > Img{
width: 300px;
height:300px;
}

p{
font-size:30px;
}
`;