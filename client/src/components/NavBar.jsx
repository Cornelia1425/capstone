import {NavLink, Link} from 'react-router-dom'

export default function NavBar({currentUser}){



    return(
        <div className=''>
            <div className="md:justify-start  py-4">
            <nav className='nav_container'>
                <NavLink className={({isActive})=> isActive? "active text-xs md:text-sm mx-2 md:mx-4 py-2":"nav_link text-xs md:text-sm mx-2 md:mx-4 py-2"}
                    to="/">
                    Home
                </NavLink>
   
                <NavLink className={({isActive})=> isActive? "active text-xs md:text-sm mx-2 md:mx-4 py-2":"nav_link text-xs md:text-sm mx-2 md:mx-4 py-2"}
                    to="/teachers">
                    Directors
                </NavLink>
           
                <NavLink className={({isActive})=> isActive? "active text-xs md:text-sm mx-2 md:mx-4 py-2":"nav_link text-xs md:text-sm mx-2 md:mx-4 py-2"}
                    to="/calendar">
                    Calendar
                </NavLink>

                <NavLink className={({isActive})=> isActive? "active text-xs md:text-sm mx-2 md:mx-4 py-2":"nav_link text-xs md:text-sm mx-2 md:mx-4 py-2"}
                    to="/interviews">
                    Interviews
                </NavLink>

                <NavLink className={({isActive})=> isActive? "active text-xs md:text-sm mx-2 md:mx-4 py-2":"nav_link text-xs md:text-sm mx-2 md:mx-4 py-2"}
                    to="/theshow">
                    TheShow
                </NavLink>

                <NavLink className={({isActive})=> isActive? "active text-xs md:text-sm mx-2 md:mx-4 py-2":"nav_link text-xs md:text-sm mx-2 md:mx-4 py-2"}
                    to="/thekids">
                    TheKids
                </NavLink>
               
{/*                 
                <div className=''>
                    {currentUser?(
                        <span>
                            💜Welcome💜 {currentUser.name}!
                        </span>
                    ):(
                        <Link className="nav_link" to="/userPanel">
                            Login
                        </Link>
                    )
                    }
                </div> */}

            </nav>
            </div>
        </div>
    )
}