import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [inputText, setInputText] = useState(['']);

  function saveInputText(event) {
      setInputText(event.target.value);
  }

  return (
      <>
          <h1>Give the Answer</h1>
          <input 
            placeholder ="Type the name"
            onChange = {saveInputText}
            size = "50"
          />
          <p>{inputText}, I'm Gay</p>
      </>
  );
}

export default App
