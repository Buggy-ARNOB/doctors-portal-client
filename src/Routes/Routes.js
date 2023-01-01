import { createBrowserRouter } from "react-router-dom";
import AllService from "../Components/AllService/AllService";
import Contact from "../Components/Contact/Contact";
import HomePage from "../Components/HomePage/HomePage";
import Banner from "../Components/Banner/Banner";
import Update from "../Components/Update/Update";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/doctor',
                element: <AllService></AllService>
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctor/${params.id}`)
            }


        ]
    },
])
