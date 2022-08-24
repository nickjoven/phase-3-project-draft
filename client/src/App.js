import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import MiniSequencer from './components/MiniSequencer'
import Login from './components/Login'
import Feed from './components/Feed'
import NavBar from './components/NavBar'



const App = () => {
const [currentUser, setCurrentUser] = useState({})
const [isLoggedIn, setIsLoggedIn] = useState(false)




  return (

    <div className="App">
      <div> 
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>
      </div>
      <MiniSequencer />
      {isLoggedIn ? 
      <Feed /> : 
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
    </div>
  );
}

export default App;
