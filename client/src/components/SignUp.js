
import React, {useState} from 'react'
import users from '../data/users'
import './SignUp.css'


const SignUp = ({currrentUser, setCurrentUser}) =>  {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')

console.log('hello')
const handleSubmit = (e) => {
    e.preventDefault()
    const createNewUser = (newUser) => {
    const updatedUser = [...currrentUser, newUser]
    setCurrentUser(updatedUser)
    
    }
}

// same button set to true back to login, 


  return (
    <div>
        <div className='container-signup'>
            <div className='create-account'>Create Account</div>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="email" className="login__input" value={email} placeholder="Email" onChange= {(e)=>setUsername(e.target.value)} />
                            </div>   
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="text" className="login__input" value={username} placeholder="Username" onChange= {(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="text" className="login__input" placeholder="Location" value={location} onChange= {(e)=>setLocation(e.target.value)}/>
                            </div>
                                <button className="button login__submit">
					          <span className="button__text">Register</span>
					          <i className="button__icon fas fa-chevron-right"></i>
				                </button>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>




    
  

)
}

export default SignUp