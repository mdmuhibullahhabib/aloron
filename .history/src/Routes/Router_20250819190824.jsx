import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home';
import Que from '../pages/QuestionBank/Que';
// import QuestionBank from '../pages/QuestionBank/QuestionBank';
import Exampage from '../pages/Exam/Exampage';
import Blog from '../pages/Blog/Blog';
import Journal from '../pages/Journal/Journal';
import AddJournal from '../pages/Journal/AddJournal';
import Info from '../pages/Info/Info';
import Courses from '../pages/Courses/Courses';


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
                element: <Que></Que>,
                // element: <QuestionBank></QuestionBank>
                children:[
                    {
                        path: "community",
                        element: <Community
                    }
                ]
            },
            {
                path: "/exams",
                element: <Exampage></Exampage>
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

        ],
    }
],
)

export default Router;