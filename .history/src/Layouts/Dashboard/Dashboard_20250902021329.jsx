import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  FaUserCog,
  FaBook,
  FaUsers,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaChartLine,
  FaClipboardList,
  FaPlusCircle
} from 'react-icons/fa';
// import useRole from '../hooks/useRole'; // returns ['admin'], ['instructor'], or ['student']

const Dashboard = () => {
  const role = "admin";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4 shadow-md">
        <nav className="space-y-2">
          {role === 'admin' && (
            <>
              <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaUsers /> Manage Users
              </NavLink>
              <NavLink
                to="/dashboard/manage-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaBook /> Manage Courses
              </NavLink>
              <NavLink
                to="/dashboard/reports"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaChartLine /> Reports & Analytics
              </NavLink>
            </>
          )}

          {role === 'instructor' && (
            <>
              <h2 className="text-xl font-bold mb-4"> Dashboard</h2>
              <NavLink
                to="/dashboard/my-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaClipboardList /> My Courses
              </NavLink>
              <NavLink
                to="/dashboard/add-course"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaPlusCircle /> Add New Course
              </NavLink>
              <NavLink
                to="/dashboard/students"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaUserGraduate /> My Students
              </NavLink>
            </>
          )}

          {role === 'student' && (
            <>
              <h2 className="text-xl font-bold mb-4">Student Dashboard</h2>
              <NavLink
                to="/dashboard/enrolled-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaBook /> Enrolled Courses
              </NavLink>
              <NavLink
                to="/dashboard/progress"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaChartLine /> My Progress
              </NavLink>
              <NavLink
                to="/dashboard/certificates"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaChalkboardTeacher /> Certificates
              </NavLink>
            </>
          )}

          <div className="divider"></div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block btn w-full text-left ${isActive ? 'btn-primary' : 'btn-ghost'}`
            }
          >
            Home
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-base-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
