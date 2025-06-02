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
