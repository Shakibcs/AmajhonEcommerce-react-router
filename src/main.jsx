
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import React from 'react'
import myCreateRoute from './Route/Route'

// const myCreateRoute = createBrowserRouter(
//   [
//     {path: '/',
//      element:<section>
                  //   <nav className='py-5 shadow-lg text-red-800'>
                  //    NAB BAR 
                  //   </nav>
                  //   <Outlet></Outlet>
                  // </section>
//      children: [
//       {
//         path: '/home',
//         element: <Home></Home>
//       },
//       {
//         path: '/products',
//         element: <Products></Products>
//       }
//     ]
//     }
  
//   ])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)

