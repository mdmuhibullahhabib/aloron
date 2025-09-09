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
  FaPlusCircle,
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaRegComments,
  FaBell,
  FaCogs
} from 'react-icons/fa';

const Dashboard = () => {
  const role = "admin";

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-base-200 p-4 shadow-md">
        <nav className="space-y-2">
          {role === 'admin' && (
            <>
              <h2 className="text-xl font-bold mb-4">এডমিন ড্যাশবোর্ড</h2>

              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaUsers /> ব্যবহারকারী ম্যানেজ
              </NavLink>

              <NavLink
                to="/dashboard/manage-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaBook /> কোর্স ম্যানেজ
              </NavLink>

              <NavLink
                to="/dashboard/add-course"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaPlusCircle /> নতুন কোর্স যোগ করুন
              </NavLink>

              <NavLink
                to="/dashboard/manage-students"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaUserGraduate /> স্টুডেন্ট ম্যানেজ
              </NavLink>

              <NavLink
                to="/dashboard/payments"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaMoneyBillWave /> পেমেন্টস ও ইনভয়েস
              </NavLink>

              <NavLink
                to="/dashboard/reports"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaChartLine /> রিপোর্টস ও অ্যানালিটিক্স
              </NavLink>

            </>
          )}

          {role === 'teacher' && (
            <>
              <h2 className="text-xl font-bold mb-4">কন্ট্রোলার ড্যাশবোর্ড</h2>

              <NavLink
                to="/dashboard/my-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaClipboardList /> আমার কোর্স
              </NavLink>

              <NavLink
                to="/dashboard/add-course"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaPlusCircle /> নতুন কোর্স যোগ
              </NavLink>

              <NavLink
                to="/dashboard/schedule"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaRegCalendarAlt /> ক্লাস সিডিউল
              </NavLink>
            </>
          )}

          {role === 'student' && (
            <>
              <h2 className="text-xl font-bold mb-4">স্টুডেন্ট ড্যাশবোর্ড</h2>

              <NavLink
                to="/dashboard/enrolled-courses"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaBook /> ভর্তি হওয়া কোর্স
              </NavLink>

              <NavLink
                to="/dashboard/order-tracking"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaRegCalendarAlt /> অর্ডার ট্রেসিং
              </NavLink>

              <NavLink
                to="/dashboard/progress"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaChartLine /> আমার প্রগ্রেস
              </NavLink>

              <NavLink
                to="/dashboard/payments"
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full btn ${isActive ? 'btn-primary' : 'btn-outline'}`
                }
              >
                <FaMoneyBillWave /> আমার পেমেন্টস
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
            হোম
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
