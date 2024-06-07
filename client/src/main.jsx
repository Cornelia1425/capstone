import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import Teachers from './components/Teachers.jsx'
import TeacherCard from './components/TeacherCard.jsx'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


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
        element: <TeacherCard />,

      }

    ]



  }


]

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)