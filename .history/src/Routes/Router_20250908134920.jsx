import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home';
import QuestionBank from '../pages/QuestionBank/QuestionBank';
import Exampage from '../pages/Exam/Exampage';
import Blog from '../pages/Blog/Blog';
import Journal from '../pages/Journal/Journal';
import AddJournal from '../pages/Journal/AddJournal';
import Info from '../pages/Info/Info';
import Courses from '../pages/Courses/Courses';
import Community from '../pages/QuestionBank/Community/Community';
import Archive from '../pages/QuestionBank/Archive/Archive';
import Faculty from '../pages/QuestionBank/Archive/Faculty';
import Exam from '../pages/QuestionBank/Archive/Exam';
import FacultyExam from '../pages/QuestionBank/Archive/FacultyExam';
import Practice from '../pages/QuestionBank/Practice/Practice';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Shop from '../pages/Shop/Shop';
import Dashboard from '../Layouts/Dashboard/Dashboard';
import ManageUsers from '../components/Dashboard/Admin/ManageUsers';
import ManageCourses from '../components/Dashboard/Admin/ManageCourses';
import Reports from '../components/Dashboard/Admin/Reports';
import EnrolledCourses from '../components/Dashboard/Student/EnrolledCourses';
import MyProgress from '../components/Dashboard/Student/MyProgress';
import CourseDetails from '../pages/Courses/CourseDetails';
import ProductDetails from '../pages/Shop/components/ProductDetails';
import Cart from '../pages/Shop/Cart/Cart';


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
                path: "/question-bank",
                element: <QuestionBank></QuestionBank>,
                children: [
                    {
                        path: "archive",
                        element: <Archive />,
                    },
                    {
                        path: "archive/:category/:cardPath",
                        element: <Faculty />,
                    },
                    {
                        path: "/archive/:cardpath",
                        element: <FacultyExam />,
                    },
                    {
                        path: "live-exam",
                        element: <Exam />,
                    },
                    {
                        path: "/question-bank/practice",
                        element: <Practice></Practice>
                    },
                    {
                        path: "/question-bank/community",
                        element: <Community></Community>
                    },
                ]
            },
            // Auth
            {
                path: "/auth/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/auth/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/exams",
                element: <Exampage></Exampage>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/product/:id",
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/journal",
                element: <Journal></Journal>
            },
            {
                path: "/published-your-innovative-project",
                element: <AddJournal></AddJournal>
            },
            {
                path: "/information",
                element: <Info></Info>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/courses/:id",
                element: <CourseDetails></CourseDetails>
            },

            // Dashboard
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    // ADMIN
                    {
                        path: "/dashboard/manage-users",
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path: "/dashboard/manage-courses",
                        element: <ManageCourses></ManageCourses>
                    },
                    {
                        path: "/dashboard/reports",
                        element: <Reports></Reports>
                    },

                    // STUDENT
                    {
                        path: "/dashboard/enrolled-courses",
                        element: <EnrolledCourses></EnrolledCourses>
                    },
                    {
                        path: "/dashboard/progress",
                        element: <MyProgress></MyProgress>
                    },


                ]
            },

        ],
    }
],
)

export default Router;