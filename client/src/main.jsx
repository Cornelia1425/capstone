import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App.jsx'
import './index.css'
import './style.css'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage.jsx'
import Teachers from './components/Teachers.jsx'
import TeacherPage from './components/TeacherPage'
import CalendarAll from './components/CalendarAll.jsx'
import UserPanel from './components/UserPanel/index.jsx'
import MyAccountBookPage from './components/MyAccountBookPage.jsx'
import Interviews from './components/Interviews.jsx'



import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CurrentUserProvider } from './components/CurrentUserContext.jsx';



const routes = [
  {
    element:<App />,
    path:'/',
    errorElement:<ErrorPage />,
    children:[
      {
        index:true,
        element:<Home />,
        path:'/',
      },
      {
        element:<Teachers />,
        path:'teachers',
      },
      {
        path:'teachers/:id',
        element: <TeacherPage />,
      },
      {
        path:'userPanel',
        element: <UserPanel />,
      },
      {
        path:'calendar',
        element: <CalendarAll />,
      },
      {
        path:'book',
        element: <MyAccountBookPage />,
      },
      {
        path:'interviews',
        element: <Interviews />,
      }
    ]
  }
]

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <RouterProvider router={router}/>
    </CurrentUserProvider>
  </React.StrictMode>
)