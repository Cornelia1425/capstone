import React, {useState, useContext, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import CurrentUserContext from './CurrentUserContext'

export default function SlideInBar(){
    const {currentUser, logout} = useContext(CurrentUserContext)
    const [isOpen, setIsOpen] = useState(false)
    const slideBarRef = useRef(null)

    const toggleBar = ()=>{
        setIsOpen(!isOpen)
    }

    function handleClickOutside(e){
        if (slideBarRef.current && !slideBarRef.current.contains(e.target) && !e.target.closest('.toggle_button')){
            setIsOpen(false)
        }
    }

    useEffect(()=>{
        if(isOpen){
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return(
        <>
        <button className='toggle_button text-2xl mt-2' onClick={toggleBar}>
            ☰
        </button>
        <div ref={slideBarRef} className={`slide_in_bar ${isOpen ? 'open': ''}`}>
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