import {NavLink, Link} from 'react-router-dom'

export default function NavBar({currentUser}){



    return(
        <div>
            <nav className='nav_container'>
                <NavLink className={
                    ({isActive})=> isActive?
                    "active":"nav_link"}
                    to="/">
                    Home
                </NavLink>
                <br/>
                <NavLink className={
                    ({isActive})=> isActive?
                    "active":"nav_link"}
                    to="/teachers">
                    Teachers
                </NavLink>
                <br/>
                <NavLink className={
                    ({isActive})=> isActive?
                    "active":"nav_link"}
                    to="/calendar">
                    Calendar
                </NavLink>
                <br/>
                
                <div className='ph_user_info'>
                    {currentUser?(
                        <span>
                            Welcome. {currentUser.name}!
                        </span>
                    ):(
                        <Link className="nav_link" to="/userPanel">
                            Login
                        </Link>
                    )
                    }

                </div>
            </nav>
        </div>
    )
}