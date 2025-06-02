import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("blue");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Choose your favorite color: {color}</h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}



export default App;

// useState is a React hook that allows us to add state to a functional component.
// it returns an array with 2 elements: the current state and a function to update it.
// it is used to manage and update component-level state variables within functional components.
