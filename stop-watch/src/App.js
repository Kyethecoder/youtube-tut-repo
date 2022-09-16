import './App.css';
import react, { useState, useEffect, useRef } from 'react'

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleTime();
    return () => clearInterval(id.current)
  }, []);
  
  let id =useRef();

  function handleTime() {
    id.current = setInterval(() => {
    setTime((prev) => prev + 1);
      console.log(time);
    }, 1000);
  } 

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={() => handleTime()}>Start</button>
      <button onClick={() => clearInterval(id.current)}>Pause</button>
      <button onClick={() => {clearInterval(id.current); 
      setTime(0); 
      }}>Reset</button>
    </div>
  );
}

export default App;
