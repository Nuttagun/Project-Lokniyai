import React from 'react'
import ReactDOM from 'react-dom/client'
import Payment from './page/payment'
import './style.css'
import Home from './page/home'
import Bookshelf from './page/Book'
import Writer from './page/Writer'
import Profile from './page/profile'
import EditProfile from './page/editProfile'

import {createBrowserRouter,RouterProvider,Router,Link} from 'react-router-dom'

const router =createBrowserRouter([
  {
    path: "/Payment",
    element:<Payment/>
  },

  {
    path: "/",
    element:<Home/>
  },

  {
    path: "/Book",
    element:<Bookshelf/>
  },

  {
    path: "/Writer",
    element:<Writer/>
  },

  {
    path: "/Profile",
    element:<Profile/>
  },

  {
    path: "/EditProfile",
    element:<EditProfile/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>
)
