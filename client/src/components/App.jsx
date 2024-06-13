import React, {useState, useEffect} from 'react'
import {Outlet} from 'react-router-dom'
// import NavBar from './NavBar'
// import UserPanel from './UserPanel'
import Header from './Header'
import Footer from './Footer'
// import Home from './Home'

function App() {

  const [currentUser, setCurrentUser] = useState(null)

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
    <div className='App'>
      <h1></h1>

      
      <Header />
      <Outlet />
      <Footer />
      
      <></>
    </div>
  )

}

export default App
