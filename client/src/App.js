import { useState, useEffect } from 'react'
import PlayerProvider from "./components/PlayerProvider";
import Login from './components/Login'
import Feed from './components/Feed'
import NavBar from './components/NavBar'
import MiniSequencer from "./components/MiniSequencer";
import SignUp from './components/SignUp';
import './App.css'
import Content from './components/Content';
import SequenceEditor from './components/SequenceEditor';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom'


const App = () => {
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasAccount, setHasAccount] = useState(true)

  const lineMap = ["BD", "SN"];
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
          <Router>
            <div className='App'>
              <div className='appcont' style={{display: currentUser?'grid':'block', padding: currentUser?'20px 20px 0 20px':'0'}}></div>
              <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} />
              <Routes>
                <Route path="/" element={isLoggedIn ?
                  <>
                    <Content currentUser={currentUser} /> 
                  </> :
                  <>
                    {hasAccount ? 
                      <>
                        <Login setHasAccount = {() => setHasAccount(false)} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                      </> : 
                      <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} setIsLoggedIn={setIsLoggedIn} />
                    }
                  <MiniSequencer player={player} lineMap={lineMap} />
                  </>
                }/>
                <Route path="/sequencer" element={
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
                } />
                <Route path='login' element={
                  <>
                    <Login setHasAccount={() => setHasAccount(false)} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    <MiniSequencer player={player} lineMap={lineMap} />     
                  </>}
                />
                <Route path='signup' element={
                  <>
                    <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    <MiniSequencer player={player} lineMap={lineMap} /> 
                  </>}
                />          
                </Routes>
            </div>
          </Router>
        )
      }}
    </PlayerProvider>
  );
}


export default App;


