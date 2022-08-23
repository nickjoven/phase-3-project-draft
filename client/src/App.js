import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import MiniSequencer from './components/MiniSequencer'


const App = () => {
  return (
    <div className="App">
      <div>NavBar Component</div>
      <MiniSequencer />
    </div>
  );
}

export default App;
