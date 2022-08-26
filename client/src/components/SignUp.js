
import React, {useState} from 'react'
import users from '../data/users'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'


const SignUp = ({ currrentUser, setCurrentUser, setIsLoggedIn }) =>  {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    const navigate = useNavigate()

    console.log('hello')
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const createNewUser = (newUser) => {
    //     const updatedUser = [...currrentUser, newUser]
    //     setCurrentUser(updatedUser)
        
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let req = await fetch('http://localhost:3300//signup_attempt', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password_digest: password,
                location: location,
                image: image,
            })
        })
        if (req.ok) {
            let res = await req.json()
            handleLoginSuccess(res)
            navigate("/")
        } else alert('failed')
    }

    const handleLoginSuccess = (user) => {
        setCurrentUser(user)
        setIsLoggedIn(true)
    }

// same button set to true back to signup, 


    return (
        <div className='signup-whole'>
            <div className='signup-banner'>
                <div className='signup-banner-content'>
                    <img className='audio-wave' src='/audio-wave.gif'></img>
                    <div className='title'>SEQUENCELIRR</div>
                </div>
            </div>
            <div className="signup-container">
                <div className="signup-screen">
                    <div className="signup-screen__content">
                        <form className="signup" onSubmit={handleSubmit}>
                            <div className="signup-align-div">
                                <div className="signup__field">
                                    <i className="signup__icon fas fa-user"></i>
                                    <input type="email" className="signup__input" name='email' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="signup__field">
                                    <i className="signup__icon fas fa-lock"></i>
                                    <input type="text" className="signup__input" name='username' value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="signup__field">
                                    <i className="signup__icon fas fa-lock"></i>
                                    <input type="password" className="signup__input" name='password_digest' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="signup__field">
                                    <i className="signup__icon fas fa-lock"></i>
                                    <input type="text" className="signup__input" name='location' placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                </div>
                                <div className="signup__field">
                                    <i className="signup__icon fas fa-lock"></i>
                                    <input type="text" className="signup__input" name='image' placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                                </div>
                                <div className='signup-help-me'>
                                    <button className="button signup__submit">
                                    <span className="button__text">Register</span>
                                    <i className="button__icon fas fa-chevron-right"></i>
				                </button>
                                </div>
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

export default SignUp



//   return (
//     <div>
//         <div className='container-signup'>
//             <div className='create-account'>Create Account</div>
//             <div className="container">
//                 <div className="ignup-screen">
//                     <div className="signup-screen__content">
//                         <form className="signup" onSubmit={handleSubmit}>
//                             <div className="signup__field">
//                                 <i className="signup__icon fas fa-user"></i>
//                                 <input type="email" className="signup__input" value={email} placeholder="Email" onChange= {(e)=>setUsername(e.target.value)} />
//                             </div>   
//                             <div className="signup__field">
//                                 <i className="signup__icon fas fa-user"></i>
//                                 <input type="text" className="signup__input" value={username} placeholder="Username" onChange= {(e)=>setEmail(e.target.value)} />
//                             </div>
//                             <div className="signup__field">
//                                 <i className="signup__icon fas fa-lock"></i>
//                                 <input type="password" className="signup__input" placeholder="Password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
//                             </div>
//                             <div className="signup__field">
//                                 <i className="signup__icon fas fa-lock"></i>
//                                 <input type="text" className="signup__input" placeholder="Location" value={location} onChange= {(e)=>setLocation(e.target.value)}/>
//                             </div>
//                                 <button className="button signup__submit">
// 					          <span className="button__text">Register</span>
// 					          <i className="button__icon fas fa-chevron-right"></i>
// 				                </button>
//                                 </form>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         </div>




    
  

// )
// }
