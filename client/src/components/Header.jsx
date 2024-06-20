import NavBar from './NavBar'
import React, {useContext} from 'react'
import CurrentUserContext from './CurrentUserContext'
import {Link} from 'react-router-dom'
import SlideInBar from './SlideInBar'

export default function Header (){

    const {currentUser, logout} = useContext(CurrentUserContext)
    return (
        <div>
            <div className="flex justify-center items-center">
                <Link to="/" className="flex items-center">
                <img src='../images/moptop_logo.png' alt="home" className="header_logo items-center"/>
                </Link>
            </div>

            <SlideInBar />
         
            <NavBar currentUser={currentUser}/>
     
        </div>
    )
}