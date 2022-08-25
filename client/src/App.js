import { useState, useEffect } from 'react'
import PlayerProvider from "./components/PlayerProvider";
import Login from './components/Login'
import Feed from './components/Feed'
import NavBar from './components/NavBar'
import MiniSequencer from "./components/MiniSequencer";


const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const lineMap = ["BD", "BD2"];
  
  return (
    <PlayerProvider>
      {({ player }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return (
          <div className='App'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} />
            {isLoggedIn ?
            <>
              <Feed /> 
            </> :
            <>
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              <MiniSequencer player={player} lineMap={lineMap} />
            </>
            }
          </div>
        )
      }}
    </PlayerProvider>
  );
}


export default App;
