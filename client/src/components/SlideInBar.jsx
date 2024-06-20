import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import CurrentUserContext from './CurrentUserContext'

export default function SlideInBar(){
    const {currentUser, logout} = useContext(CurrentUserContext)
    const [isOpen, setIsOpen] = useState(false)

    const toggleBar = ()=>{
        setIsOpen(!isOpen)
    }

    return(
        <>

        <button className='toggle_button' onClick={toggleBar}>
            ☰
        </button>
        <div className={`slide_in_bar ${isOpen ? 'open': ''}`}>
            <div className='slide_in_content mt-12'>
                {currentUser ?(
                    <>
                        <span>WELCOME ✨ {currentUser.name} ✨</span>
                        <Link className='nav_link_myaccount' to='/book'>My Account</Link>
                        <button className='nav_link_myaccount text-lg font-semibold mt-8'  onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link className='nav_link_myaccount text-lg font-semibold mt-8' to='/userPanel'>Login</Link>
                )}
            </div>
        </div>    
        </>
    )
}