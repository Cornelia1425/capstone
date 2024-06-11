import React, {useContext} from 'react'
import Signup from './Signup'
import Login from './Login'
import CurrentUserContext from '../CurrentUserContext'

export default function UserPanel(){
    const {currentUser, setCurrentUser}= useContext(CurrentUserContext)

    if(!currentUser){
        return (
            <div>
                <div className="login_container">
                    <h3>Login</h3>
                    <Login setCurrentUser={setCurrentUser}/>
                </div>
                <div className="signup_container">
                    <h3>New Here?</h3>
                    <Signup setCurrentUser={setCurrentUser}/>
                </div>
            </div>
        )
    }
    
    }