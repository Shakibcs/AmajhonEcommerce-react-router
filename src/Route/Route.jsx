import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Dashboard/Dashboard";

const myCreateRoute = createBrowserRouter(
    [
      {path: '/',
       element: <MainLayout></MainLayout>,
       children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
          }
      ]
      }
    
    ])

export default myCreateRoute;