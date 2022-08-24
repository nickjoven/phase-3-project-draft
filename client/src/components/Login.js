import React, {useState} from 'react'
import users from '../data/users'


const Login = ({currentUser, setCurrentUser, setIsLoggedIn, isLoggedIn }) =>  {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

const handleSubmit = (e) => {
    e.preventDefault()
    const inputUser = users.find((user) => user.username === username)
    if (inputUser) {
        if(inputUser.password != password) {
            alert(`invalid password for ${username}`)
        } else handleLoginSuccess(inputUser)
    } else {
        alert(`invalid username: ${username}`)
    }
        
        }
    


const handleLoginSuccess = (user) => {
     setCurrentUser(user)
     setIsLoggedIn(true)
}





  return (
    <div>
        <h3>Login</h3>
    <form onSubmit={handleSubmit}>
        <input 
        value={username}
        type='text' 
        placeholder='Username'
        onChange={(e) => setUsername(e.target.value)} />
   
        
        <h3>Password</h3>
            <input
            value={password}
            type='text'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}  />

        <div>
            <button type='submit'
            className='submit-button'>Login</button>
        
        </div>
            </form>  

    </div>
    


  )
  }




export default Login