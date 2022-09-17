import './App.css';
import React, { useState } from 'react';
import Dropdown from './Components/Dropdown';
import TextForm from './Components/TextForm';

export default function App() {
  const anime_characters = ['character 1', 'character 2', 'character 3'];

  const [char, setChar] = useState(anime_characters[0]);
  const [text, setText] = useState('');

  function onSubmit() {
    console.log(char);
    console.log(text);
    // TODO: fill in this section with onSubmit functionality
  }

  return (
    <div>
      <div className="App">
        <p>Talk like your favourite anime character!</p>
      </div> 
      <div className="App-body">
        <div className="flex-row">
          <Dropdown formText='Select Anime Character' characters={anime_characters} onChange={setChar} charName={char}/>
          <TextForm formText='Enter text' onChange={setText} text={text}/>
        </div>
        <button type="submit" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}
