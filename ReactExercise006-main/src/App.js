import { useState } from 'react';
import './App.css';
import Dado from './components/Dado';

function App() {
  function genValue() { return Math.trunc(Math.random() * 6) + 1 }

  const [dado, setDado] = useState(genValue)
  const [dado1, setDado1] = useState(genValue)
  const [dado2, setDado2] = useState(genValue)

  function draw() {
    setDado(genValue())
    setDado2(genValue())
    setDado1(genValue())
  }
  return (
    <div className="App">
      <Dado value={dado} />
      <Dado value={dado1} />
      <Dado value={dado2} />
      <button onClick={draw}>Click Me</button>
    </div>
  );
}

export default App;
