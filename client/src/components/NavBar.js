import React, { useState } from 'react'
import users from '../data/users'
import DropdownMenu from './DropdownMenu'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const NavBar = ({ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }) => {
    const [search, setSearch] = useState('')
    const [inputText, setInputText] = useState('')
    const [isClicked, setIsClicked] = useState(false)


    const handleClick = () => {
        setIsClicked(isClicked => !isClicked)
    }

    

    const handleDropdown = () => {

    }

    // filter blah bleh

    // set up to not show when have data to control

    //event lidtener f





    return (

        <div className='nav-bar'>
            {isLoggedIn ?
                <div className="LoggedIn">
                    <div className='logo-title' >
                        <img className='audio-wave-small' src='/audio-wave.gif'></img>
                        <div className='title-small'>SequenceMe</div>
                    </div>
                    <div className='form-div'>
                        <form>
                            <div class="container">
                            <input type="text" placeholder="Search..."/>
                             <div class="search"></div>
                            </div>
                        </form>
                        <button onClick={handleClick}>{currentUser.username}</button>
                        <button>+</button>
                    </div>
                    {isClicked ?
                        <div>
                            < DropdownMenu currentUser={currentUser} onClick={handleClick}/> 
                        </div> : null
                    }
                </div> :
                <div className="LoggedOut">
                </div>}
        </div>

    )
}

export default NavBar
