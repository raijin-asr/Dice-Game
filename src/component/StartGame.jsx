import styled from "styled-components";

const StartGame = () => {
  return (
    <Container>
      <div>
      <img src="images/dices.png" alt="logo" />
      </div>
      <div className="content">
        <h1>Raijin Dice Game</h1>
        <Button>Start Game</Button>
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
`;