import { useState, useEffect } from 'react'
import PlayerProvider from "./components/PlayerProvider";
import Login from './components/Login'
import Feed from './components/Feed'
import NavBar from './components/NavBar'
import MiniSequencer from "./components/MiniSequencer";
import SequenceEditor from './components/SequenceEditor';


const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const lineMap = ["BD", "BD2"];
  const lineMap2 = ['BD', 'BD2', 'SN', 'CH', 'OH', 'T1', 'T2', 'T3']
  
  return (
    <PlayerProvider>
      {({ 
        player, 
        setCrusherValue, 
        crusherValue,
        limiterValue,
        setLimiterValue,
        distortionValue,
        setDistortionValue,
       }) => {
        if (!player) {
          return <p>loading....</p>;
        }
        return (
          <div className='App'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} />
            {/* {isLoggedIn ?
            <>
              <Feed /> 
            </> :
            <>
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
              <MiniSequencer player={player} lineMap={lineMap} />
            </>
            } */}          
            <SequenceEditor 
              player={player} 
              lineMap={lineMap2} 
              setCrusherValue={setCrusherValue} 
              crusherValue={crusherValue} 
              limiterValue={limiterValue}
              setLimiterValue={setLimiterValue}
              distortionValue={distortionValue}
              setDistortionValue={setDistortionValue}
            />
          </div>
        )
      }}
    </PlayerProvider>
  );
}


export default App;
