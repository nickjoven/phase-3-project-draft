import React, {useState} from 'react'
import users from '../data/users'

const NavBar = ({isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}) => {
    const [search, setSearch] = useState('')
    const [inputText, setInputText] = useState('')
    const [isClicked, setIsClicked] = useState(false)


    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
    }



    // filter blah bleh

    // set up to not show when have data to control

    //event lidtener f





return (
    
    <div>
        {isLoggedIn ? 
         <div className="LoggedIn">
            <form>
                <input
                type='text'>
                </input>    
            </form>
            <button onClick={handleClick}>{currentUser.username}</button>
            {isClicked ? 
            <div>
                <ul>
                    <li>Profile</li>
                    <li>Following</li>
                    <li>Logout</li>
                </ul>
                <button>+</button>
            </div> :
            null
            } 
        </div> :
        <div className="LoggedOut">
     </div>}
    </div>
    
  )
}

export default  NavBar