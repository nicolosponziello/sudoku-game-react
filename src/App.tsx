import React from 'react';
import './App.css';
import "./components/Board";
import Board from './components/Board';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Board boardSize={3} />
    </div>
  );
}

export default App;
