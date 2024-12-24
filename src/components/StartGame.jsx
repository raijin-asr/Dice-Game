import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src="images/dices.png" alt="logo" />
      </div>
      <div className="content">
        <h1>Raijin Dice</h1>
        <Button onClick={toggle}>Play Game</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content {
      h1{
        font-size: 90px;
        white-space: nowrap;
        margin-bottom: 10px;
      }
    }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 11px 19px;
    border-radius: 5px;
    min-width: 200px;
    border: none;
    font-size: 15px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s ease-in;
    }
`;