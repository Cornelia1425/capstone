import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App.jsx'
import './index.css'
import './style.css'
import Teachers from './components/Teachers.jsx'
import TeacherPage from './components/TeacherPage'
import CalendarAll from './components/CalendarAll.jsx'
// import CalendarByTeacher from './components/CalendarByTeacher.jsx'
import Home from './components/Home'
import UserPanel from './components/UserPanel/index.jsx'
import ErrorPage from './components/ErrorPage.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CurrentUserProvider } from './components/CurrentUserContext.jsx';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

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