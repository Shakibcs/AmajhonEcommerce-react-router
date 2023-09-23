import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/home";
import Products from "../Pages/Products/Products";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Pages/Footer/Footer";
import Product from "../Pages/Products/Product/Product";

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
          element: <Products></Products>,
          loader: () => fetch('https://dummyjson.com/products'),
        },
        {
          path: '/products/:id',
          element: <Product></Product>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
          },
          {
            path: '/footer',
            element: <Footer></Footer>
          }
      ]
      }
    
    ])

export default myCreateRoute;