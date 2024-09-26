import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // Corrected destructuring of useState
  const [data, setData] = useState();

  // Corrected useEffect and fetch syntax
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        setData(data); // Set the data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
          {data ? JSON.stringify(data) : "Loading..."} {/* Conditional rendering */}
     
      </header>
    </div>
  );
}

export default App;
