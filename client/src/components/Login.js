import React, { useState } from 'react'
import users from '../data/users'
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';
import './Login.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

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
        navigate("/")
    }

    const navigate = useNavigate()

    //const handleClick = () => {
       
    
//}


// audio-wave
// title
//


    return (
	<div className='login-whole'>
		<div className='login-banner'>
			<div className='login-banner-content'>
				<img className='audio-wave' src='/audio-wave.gif'></img>
				<div className='title'>SequenceMe</div>
			</div>
		</div>
		<div className="login-container">
			<div className="login-screen">
				<div className="login-screen__content">
					<form className="login" onSubmit={handleSubmit}>
						<div className="login-align-div">
							<div className="login__field">
								<i className="login__icon fas fa-user"></i>
								<input type="text" className="login__input" value={username} placeholder="Username/Email" onChange= {(e)=>setUsername(e.target.value)} />
							</div>
							<div className="login__field">
								<i className="login__icon fas fa-lock"></i>
								<input type="password" className="login__input" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
							</div>
							<div className='login-help-me'>
								<button className="button login__submit">
									<div className="login-button__text">Log In Now</div>
									<i className="button__icon fas fa-chevron-right"></i>
								</button>
							</div>
							<span className='make-account'>Don't have an Account?</span>
							<button className="button login__signup" onClick= {setHasAccount}>
								<span className="button__signup">Sign Up Now</span>
								<i className="button__icon fas fa-chevron-right"></i>
							</button>	
						</div>
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


