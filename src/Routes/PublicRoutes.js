import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Main from "../Pages/Layouts/Main";
import AllServices from "../Pages/Services/AllServices";
import ServiceDetails from "../Pages/Services/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>,
                loader: async () => {
                    return fetch('http://localhost:5000/services')
                }
            },
            {
                path: '/servicedetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            {
                path: '/checkout/:id',
                element: <div>CHECK OUT FORM</div>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
            }
        ]
    }
])