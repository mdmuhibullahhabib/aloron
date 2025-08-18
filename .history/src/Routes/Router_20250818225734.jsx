import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop'
import Fragrance from '../Pages/Fragrance/Fragrance'
import Makeup from '../Pages/Makeup/Makeup'
import Skincare from '../Pages/Skincare/Skincare'
import HairCare from '../Pages/HairCare/HairCare'
import Accessories from '../Pages/Accessories/Accessories'
import Contact from '../Pages/Contact/Contact'
import SignIn from '../Pages/Auth/SignIn'
import SignUp from '../Pages/Auth/SignUp'
import Account from '../Pages/User/Account'
import Dashboard from '../Pages/Admin/Dashboard'
import Orders from '../Pages/Orders/Orders'
import Cart from '../Pages/Cart/cart'
import CheckoutSuccess from '../Pages/Checkout.jsx/CheckoutSuccess'
import Checkout from '../Pages/Checkout.jsx/Checkout'
import ProductDetails from '../Pages/ProductDetails/ProductDetails'
import AdminRoute from './AdminRoute'
import PrivateRoute from './PrivateRoute'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/skincare",
                element: <Skincare></Skincare>
            },
            {
                path: "/makeup",
                element: <Makeup></Makeup>
            },
            {
                path: "/fragrance",
                element: <Fragrance></Fragrance>
            },
            {
                path: "/hair-care",
                element: <HairCare></HairCare>
            },
            {
                path: "/accessories",
                element: <Accessories></Accessories>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/product/:_id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`https://prottayshashop-server.vercel.app/product/${params._id}`),

            },


            // user
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/checkout",
                element: <Checkout></Checkout>
            },
            {
                path: "/success-checkout",
                element: <CheckoutSuccess></CheckoutSuccess>
            },
            {
                path: "/orders",
                element: <PrivateRoute> <Orders></Orders> </PrivateRoute>,
            },
            {
                path: "/account",
                element: <PrivateRoute> <Account></Account> </PrivateRoute>,
            },
            // Admin
            {
                path: "/dashboard",
                element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
            },


            // Auth
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ],
    }
],
)

export default Router;