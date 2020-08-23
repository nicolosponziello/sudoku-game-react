import React from 'react';
import './App.css';
import "./components/Board";
import Board from './components/Board';
import { Header } from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
