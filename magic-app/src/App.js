import React, { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);       // To focus the input
  const countRef = useRef(0);          // To track typing without re-rendering
  const [bgColor, setBgColor] = useState("#ffffff"); // Just for visual effect
  const [value, setValue] = useState("");             // Input value

  const getRandomColor = () => {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setBgColor(getRandomColor());
    countRef.current += 1;
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: bgColor, minHeight: '100vh' }}>
      <h1>🎩 Magic Input</h1>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something magical..."
        style={{ padding: '10px', fontSize: '18px', width: '300px' }}
      />
      <br /><br />
      <button onClick={handleFocus} style={{ padding: '10px 20px', fontSize: '16px' }}>
        🔮 Focus Input
      </button>
      <p style={{ marginTop: '30px', fontSize: '18px' }}>
        You typed <strong>{countRef.current}</strong> times! ✍️
      </p>
    </div>
  );
}

export default App;


// useRef is a react hook which returns a .current object
// we can use it to keep a value without forcing a re-render
// and it can also be used to access DOM elements directly
// it is useful for keeping track of mutable values that do not require re-rendering the component when they change