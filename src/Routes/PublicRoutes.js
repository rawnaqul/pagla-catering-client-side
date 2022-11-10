import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layouts/Main";
import Login from "../Pages/Login/Login";
import AddService from "../Pages/Services/AddService";
import AllServices from "../Pages/Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Signup from "../Pages/Signup/Signup";
import MyReviews from "../Pages/UserReviews/MyReviews";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch('https://assign-11-server.vercel.app/serviceshome')
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>,
                loader: async () => {
                    return fetch('https://assign-11-server.vercel.app/services')
                }
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => {
                    return fetch(`https://assign-11-server.vercel.app/services/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: async ({ params }) => {
                    return fetch(`https://assign-11-server.vercel.app/services/${params.id}`)
                }
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
                loader: async () => {
                    return fetch('https://assign-11-server.vercel.app/servicesadd')
                }
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '*',
                element: <div className="text-center text-8xl text-orange-600 font-bold">404!</div>,
            }
        ]
    }
])