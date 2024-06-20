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
            <div className='slide_in_content'>
                {currentUser ?(
                    <>
                        <span>💜 Welcome, {currentUser.name}! 💜</span>
                        <Link className='nav_link' to='/book'>My Account</Link>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <Link className='nav_link' to='/userPanel'></Link>
                )}
            </div>
        </div>    
        </>
    )
}