import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home/home";
import Products from "../Pages/Products/Products";
import Footer from "../Pages/Footer/Footer";
import Product from "../Pages/Products/Product/Product";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";


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
          path: '/products/:id',   //dynamic products ..
          element: <Product></Product>,
         // loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
        },
       
        {
            path: '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children: [
              {
                path: "/dashboard",
                element:<Dashboard></Dashboard>
              },
              {
                path: "/dashboard/profile",
                element:<Profile></Profile>
              },
              {
                path: "/dashboard/editProfile",
                element:<EditProfile></EditProfile>
              }

            ]
          },
          {
            path: '/footer',
            element: <Footer></Footer>
          }
      ]
      }
    
    ])

export default myCreateRoute;