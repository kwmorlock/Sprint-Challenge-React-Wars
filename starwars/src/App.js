import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
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
            namemeow={starData.name}
            height={starData.height}
            mass={starData.mass}
          />
        );
      })}

    </div>
  );

  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  // const handleChange = event => {
  //    setSearchTerm(event.target.value);
  //  };
  // React.useEffect(() => {
  //    const results = people.filter(person =>
  //      person.toLowerCase().includes(searchTerm)
  //    );
  //    setSearchResults(results);
  //  }, [searchTerm]);
 
  //  return (
  //    <div className="Apps">
  //      <input
  //        type="text"
  //        placeholder="Search"
  //        value={searchTerm}
  //        onChange={handleChange}
  //      />
  //      <ul>
  //         {searchResults.map(item => (
  //          <li>{item}</li>
  //        ))}
  //      </ul>
  //    </div>
  //  );
 }



export default App;


