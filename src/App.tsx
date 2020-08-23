import React from 'react';
import './App.css';
import "./components/Board";
import { Header } from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <Game boardSize={3}/>
    </div>
  );
}

export default App;
