import React from 'react'
import styled from "styled-components";

const TotalScore = () => {
  return (
    <div>
        <h1>0</h1>
        <p>Total Score</p>
    </div>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width:200px;
text-align: center;

h1{
  font-size:100px;
  line-height:100px;
}
p{
  font-size:20px;
  font-wright:500px;
}
`;