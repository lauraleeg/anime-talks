import './App.css';
import './Components/Dropdown';
import Dropdown from './Components/Dropdown';

function App() {
  const anime_characters = ['character 1', 'character 2', 'character 3'];

  return (
    <div>
     <div className="App">
      <p>Talk like your favourite anime character!</p>
    </div> 
    <div className="App-body">
      <Dropdown formText='Select Anime Character' characters={anime_characters}/>
    </div>
    </div>
  );
}

export default App;
