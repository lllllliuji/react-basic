import Login from "./pages/Login";
import Article from "./pages/Article";

import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Board from "./pages/Board";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Board />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article',
        element: <Article />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router