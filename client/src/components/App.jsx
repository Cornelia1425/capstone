import React, {useState, useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
// import NavBar from './NavBar'
// import UserPanel from './UserPanel'
import Header from './Header'
import Footer from './Footer'
import BackgroundVideo from './BackgroundVideo'
// import Home from './Home'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const location = useLocation()

  useEffect(()=>{
    fetch('/api/check-session')
    .then(response=>{
      if(response.status=== 200){
        response.json()
        .then(loggedInUser=>setCurrentUser(loggedInUser))
      }
    })
  },[])

  return (
    <div id="root" className={location.pathname === '/'? 'homepage':'otherpagesv1'}>

    {/* Conditionally render the background video only on the homepage */}
    {location.pathname === '/' && <BackgroundVideo />}
      
      <Header />
      <div className='Outlet'>
        <Outlet/>
      </div>
      {/* if we put video in App, its gonna be all over the world. */}
      {/* <deo /> */}
      <Footer />
      
      <></>
    </div>
  )

}

export default App
