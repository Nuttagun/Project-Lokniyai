import React from 'react'
import ReactDOM from 'react-dom/client'
import Payment from './page/payment'
import './style.css'
import Home from './page/home'
import L_Bookshelf from './page/Bookshelf/L_Bookshelf'
import L_Content from './page/Bookshelf/L_Content'


import {createBrowserRouter,RouterProvider,Router,Link} from 'react-router-dom'

const router =createBrowserRouter([
  {
    path: "/Payment",
    element:<Payment/>
  },
  {
    path: "/",
    element:<Home/>
  }
  ,
  {
    path: "/L_Bookshelf",
    element:<L_Bookshelf/>
  },
  {
    path:"/L_Content",
    element: <L_Content/>
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>
)
