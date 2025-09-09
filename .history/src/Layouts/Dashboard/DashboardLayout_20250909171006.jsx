import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Dashboard from '../Pages/Admin/Dashboard';


const AdminDashboard = () => {
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

export default AdminDashboard

export default DashboardLayout