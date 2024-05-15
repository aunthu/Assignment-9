import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import JobDetails from './Component/JobDetails/JobDetails.jsx';
import JobsLoader from './Component/Utilities/JobsLoader.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('jobs.json')
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'/:JobId',
        element:<JobDetails></JobDetails>,
        loader:({params})=>(JobsLoader(params.JobId))
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
