import React from 'react'
import { createBrowserRouter } from 'react-router-dom'


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

        ],
    }
],
)

export default Router;