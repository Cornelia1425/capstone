import NavBar from './NavBar'
import React, {useContext} from 'react'
import CurrentUserContext from './CurrentUserContext'
import {Link} from 'react-router-dom'
import SlideInBar from './SlideInBar'

export default function Header (){

    const {currentUser, logout} = useContext(CurrentUserContext)
    return (
        <header>
            <SlideInBar />
            {/* <div>
                <Link to='book'>My Account</Link>
            </div> */}
            <NavBar currentUser={currentUser}/>
            {/* {currentUser &&(
                <button onClick={logout}>
                    Logout
                </button>
            )} */}

        </header>
    )
}