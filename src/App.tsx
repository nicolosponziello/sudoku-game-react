import React from 'react';
import './App.css';
import "./components/Board";
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Board boardSize={3} />
    </div>
  );
}

export default App;
