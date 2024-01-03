import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(5);
  const [numbers, setNumbers] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [symbol, setSymbol] = useState(false);

  function includeNumbers(e) {
    setNumbers(e.target.checked);
  }

  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  function includeUppercase(e) {
    setUppercase(e.target.checked);
  }

  function includeLowercase(e) {
    setLowercase(e.target.checked);
  }

  function generatePassword() {
    let generatedPassword = '';
    let string = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numbers) {
      string += '0123456789';
    }

    if (symbol) {
      string += '!@#$%^&*()_+';
    }

    const charSet = (uppercase ? string.toUpperCase() : string) +
                    (lowercase ? string.toLowerCase() : '');

    for (let index = 0; index < length; index++) {
      const randomNumber = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomNumber];
    }

    setPassword(generatedPassword);
  }

  return (
    <>
      <h2>{password}</h2>
      <label htmlFor="length">Length: {length}</label>
      <input
        type="range"
        id="length"
        min={5}
        max={25}
        onChange={(e) => setLength(parseInt(e.target.value))}
        value={length}
      />
      <br />
      <label htmlFor="numbers">Include Numbers</label>
      <input
        type="checkbox"
        id="numbers"
        checked={numbers}
        onChange={includeNumbers}
      />
      <br />
      <label htmlFor="symbol">Include Symbols</label>
      <input
        type="checkbox"
        id="symbol"
        checked={symbol}
        onChange={includeSymbol}
      />
      <br />
      <label htmlFor="uppercase">Include Uppercase</label>
      <input
        type="checkbox"
        id="uppercase"
        checked={uppercase}
        onChange={includeUppercase}
      />
      <br />
      <label htmlFor="lowercase">Include Lowercase</label>
      <input
        type="checkbox"
        id="lowercase"
        checked={lowercase}
        onChange={includeLowercase}
      />
      <br />
      <button onClick={generatePassword}>Generate Password</button>
    </>
  );
}

export default App;