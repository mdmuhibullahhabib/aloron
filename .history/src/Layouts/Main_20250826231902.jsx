import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar';
// import Footer from '../components/common/Footer';


const Main = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="">
                <Outlet></Outlet>
            </div>

            <footer>
                {/* <Footer></Footer> */}
            </footer>
        </div>
    )
}

export default Main;