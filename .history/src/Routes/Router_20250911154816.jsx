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
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers';
// import ManageCourses from '../pages/Dashboard/Admin/ManageCourses';
import Reports from '../pages/Dashboard/Admin/Reports';
import EnrolledCourses from '../pages/Dashboard/Student/EnrolledCourses';
import MyProgress from '../pages/Dashboard/Student/MyProgress';
import CourseDetails from '../pages/Courses/CourseDetails';
import ProductDetails from '../pages/Shop/components/ProductDetails';
import Cart from '../pages/Shop/Cart/Cart';
import ExamPage from '../pages/QuestionBank/Archive/ExamPage';
import Checkout from '../pages/Shop/Checkout/Checkout';
import CheckoutSuccess from '../pages/Shop/Checkout/CheckoutSuccess';
import DashboardLayout from '../Layouts/Dashboard/DashboardLayout';
import Payments from '../pages/Dashboard/Admin/payments/Payments';
import Orders from '../pages/Dashboard/Student/Orders';
import MyCourses from '../pages/Dashboard/Controller/MyCourses';
import AddCourse from '../pages/Dashboard/Admin/AddCourse';
import Subscribe from '../pages/Subscribtion/Subscribe';
import PaymentPage from '../pages/Subscribtion/PaymentPage';
import ManageCourses from '../pages/Dashboard/Admin/ManageCourses/ManageCourses';


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
                        path: "archive/:path",
                        element: <FacultyExam />,
                    },
                    {
                        path: "read-archive/:path",
                        element: <ExamPage />,
                    },
                    {
                        path: "facultyexam/:title",
                        element: <FacultyExam />,
                    },
                    {
                        path: "live-exam",
                        element: <Exam />,
                    },
                    {
                        path: "practice",
                        element: <Practice></Practice>
                    },
                    {
                        path: "community",
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

            // shop related route
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
                path: "/checkout",
                element: <Checkout></Checkout>
            },
            {
                path: "/success-checkout",
                element: <CheckoutSuccess></CheckoutSuccess>
            },

            // blog releted route
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

        ],
    },
    // Dashboard
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            // ADMIN
            {
                path: "manage-users",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "manage-users",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "manage-courses",
                element: <ManageCourses></ManageCourses>
            },
            {
                path: "add-course",
                element: <AddCourse></AddCourse>
            },
            {
                path: "reports",
                element: <Reports></Reports>
            },
            {
                path: "Payments",
                element: <Payments></Payments>
            },

            // TEACHER
                        {
                path: "my-courses",
                element: <MyCourses></MyCourses>
            },

            // STUDENT
            {
                path: "enrolled-courses",
                element: <EnrolledCourses></EnrolledCourses>
            },
            {
                path: "order-tracking",
                element: <Orders></Orders>
            },
            {
                path: "progress",
                element: <MyProgress></MyProgress>
            },


        ]
    },
    // Subscription
    {
        path: "/subscribtion",
        element: <Subscribe></Subscribe>,
    },
    {
        path: "/payment",
        element: <PaymentPage></PaymentPage>
    },
],
)

export default Router;