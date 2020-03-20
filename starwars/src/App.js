import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import SpaceBalls from "./components/SpaceBalls";

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [star, setStar] = useState([]);
useEffect(() => {
  axios.get("https://swapi.co/api/people")
  .then(response => {
    console.log(response.data.results)
    setStar(response.data.results);
  })
  .catch(error => {
    console.log('wow', error)
  })
}, [])


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {star.map((starData, index) => {
        console.log(starData);
        return (
          <SpaceBalls
            key={index}
            name={starData.name}
            height={starData.height}
            mass={starData.mass}
          />
        );
      })}

    </div>
  );
}

export default App;
