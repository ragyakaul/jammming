import './App.css';
import { useState } from 'react';
// import Playlist from './components/Playlist';
// import SearchResults from './components/SearchResults';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import { songs } from './data.js';

export default function App() {
  const [query, setQuery] = useState(' ');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming: Spotify Playlist Creator</h1>
        <SearchBar query={query} setQuery={setQuery}/>
        <Tracklist songs={songs}/> 
      </header>
    </div>
  );
};
