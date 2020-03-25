import React from "react";
import styled from "styled-components";

const SpaceBalls = props => {
    return (
      <Spacediv>
        <h2>{props.namemeow}</h2>
        <h3>Height: {props.height} feet tall!</h3>
        <h3>Mass: {props.mass} thousand pounds!</h3>
      </Spacediv>
    );
  };

  const Spacediv = styled.div`
background: purple;
border: 20px solid hotpink;
border-radius: 20px;
color: fuchsia;
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 0 auto;
margin-bottom: 5%;
`;
export default SpaceBalls;