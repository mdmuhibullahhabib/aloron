import React from 'react'
import { Outlet } from 'react-router-dom'


const Main = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="mt-24">
                <Outlet></Outlet>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default Main;