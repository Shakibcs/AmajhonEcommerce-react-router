
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'

const myCreateRoute = createBrowserRouter(
  [
    {path: '/',
     element: <section className="text-red-800">
      <div>This is root path</div>
     <Outlet></Outlet>
     </section>,
     children: [
      {
        path: '/home',
        element: <div>This is home</div>
      },
      {
        path: '/products',
        element: <div>Products page</div>
      }
    ]
    }
  
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)

