import React from "react";

const SpaceBalls = props => {
    return (
      <div>
        <h2>{props.name}</h2>
    <h3>Height: {props.height} feet tall</h3>
    <h3>Mass: {props.mass} thousand pounds</h3>
      </div>
    );
  };
  
  export default SpaceBalls;