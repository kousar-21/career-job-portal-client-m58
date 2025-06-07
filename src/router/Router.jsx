import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import JobsDetails from '../pages/JobsDetails/JobsDetails';
import JobApply from '../pages/JobApply/JobApply';
import PrivateRoute from '../contexts/PrivateRoute';
import MyApplication from '../pages/myApplication/MyApplication';
import AddJobs from '../pages/MultiForm/AddJobs';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import ViewJobApplication from '../pages/ViewJobApplication/ViewJobApplication';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
        {
            index:true,
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/signIn',
            element: <SignIn></SignIn>
        },
        {
          path: '/jobs/:id',
          loader: ({params})=> fetch(`http://localhost:4000/jobs/${params.id}`),
          element: <JobsDetails></JobsDetails>
        },
        {
          path: "/applyJob/:id",
          element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
          path: '/myApplication',
          element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path: '/addJob',
          element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
        },
        {
          path: "/myPostedJobs",
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
          path: "/application/:job_id",
          loader: ({params})=>fetch(`http://localhost:4000/applications/job/${params.job_id}`),
          element: <PrivateRoute><ViewJobApplication></ViewJobApplication></PrivateRoute>
        }
    ]
  },
]);

