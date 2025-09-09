import React from 'react'
import { useLocation } from 'react-router-dom'



const DashboardLayout = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('dashboard')
    return (
        <div>
            <header>
                {noHeaderFooter || <Navbar></Navbar>}
            </header>
            
            <div className="">
                <Dashboard></Dashboard>
            </div>

            <footer>
               {noHeaderFooter ||  <Footer></Footer>}
            </footer>
        </div>
        )
}


export default DashboardLayout;