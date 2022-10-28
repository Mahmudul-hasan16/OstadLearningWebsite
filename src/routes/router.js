import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Login from "../pages/authenticationPages/Login";
import Register from "../pages/authenticationPages/Register";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import Ai from "../pages/coursesPage/Ai";
import Course from "../pages/coursesPage/Course";
import Dashboard from "../pages/coursesPage/Dashboard";
import Data from "../pages/coursesPage/Data";
import Instructor from "../pages/coursesPage/Instructor";
import Iot from "../pages/coursesPage/Iot";
import Marketing from "../pages/coursesPage/Marketing";
import SingleCourse from "../pages/coursesPage/SingleCourse";
import Web from "../pages/coursesPage/Web";
import ErrorPage from "../pages/error/ErrorPage";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Checkout from "../pages/private/Checkout";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses />,

                children: [{
                    path: '/courses',
                    element: <Course />,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                },
                {
                    path: '/courses/:id',
                    element: <SingleCourse />,
                    loader: ({ params }) => {
                        return fetch(`https://server-ostad-mahmudul-hasan16.vercel.app/courses/${params.id}`)
                    }

                },
                {
                    path: 'ai',
                    element: <Ai />,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                },
                {
                    path: 'Data',
                    element: <Data />,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                },
                {
                    path: 'web',
                    element: <Web />,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                },
                {
                    path: 'Iot',
                    element: <Iot />,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                },
                {
                    path: 'Marketing',
                    element: <Marketing />,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />
                },
                {
                    path: 'instructor',
                    element: <Instructor />
                },
                {
                    path: 'checkout',
                    element: <PrivateRouter><Checkout /></PrivateRouter>,
                    loader: () => fetch('https://server-ostad-mahmudul-hasan16.vercel.app/courses')
                }
                ]
            },
            {
                path: 'faq',
                element: <Faq />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])
export default router;