import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Dashboard from './Dashboard';



const DashboardLayout = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('dashboard')
    return (
        <div>
            <header>
                {noHeaderFooter || <Navbar></Navbar>}
            </header>
            
            <div className="">
                <Dashboard>
                              {/* <Outlet /> */}
                </Dashboard>
            </div>

            <footer>
               {noHeaderFooter ||  <Footer></Footer>}
            </footer>
        </div>
        )
}


export default DashboardLayout;