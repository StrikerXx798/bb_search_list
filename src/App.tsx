import React from 'react';
import './App.css';
import {SearchBar} from "./SearchBar";
import {Pages} from "./Pages";
import {FilmList} from "./FilmList";

function App() {
  return (
    <div className="App">
        <SearchBar/>
        <Pages/>
        <FilmList/>
    </div>
  );
}

export default App;
