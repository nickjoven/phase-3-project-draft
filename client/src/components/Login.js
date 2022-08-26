import React, { useState } from 'react'
import users from '../data/users'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = ({ currentUser, setCurrentUser, setIsLoggedIn, isLoggedIn, setHasAccount }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const inputUser = users.find((user) => user.username || user.email === username)
        if (inputUser) {
            if (inputUser.password != password) {
                alert(`invalid password for ${username}`)
            } else handleLoginSuccess(inputUser)
        } else {
            alert(`invalid username/email: ${username}`)
        }

    }



    const handleLoginSuccess = (user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
    }

    //const handleClick = () => {
       
    
//}


// audio-wave
// title
//


    return (
        <div>
            <img className='audio-wave' src='/audio-wave.gif'></img>
            <div className='title'>SequenceMe</div>
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" value={username} placeholder="Username/Email" onChange= {(e)=>setUsername(e.target.value)} />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
                <span className='make-account'>Don't have an Account?</span>
                <button className="button login__signup" onClick= {setHasAccount}>
					<span className="button__signup">SignUp Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	

			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
    )
}
       

export default Login


