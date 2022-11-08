import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layouts/Main";
import Login from "../Pages/Login/Login";
import AllServices from "../Pages/Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Signup from "../Pages/Signup/Signup";

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
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])