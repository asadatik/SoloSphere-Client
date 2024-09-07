import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Route from './routes/Route';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home'
import { HelmetProvider } from 'react-helmet-async';

import Authprovider from './provider/Authprovider';
import Login from './pages/Authentication/Login';
import Register  from './pages/Authentication/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Route></Route> ,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register></Register>,
      },
      {
        path: '/job/:id',
        element: <jobDetails></jobDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      // {
      //   path: '/update/:id',
      //   element: <UpdateJob />,
      //   loader: ({ params }) =>
      //     fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      // },
      // {
      //   path: '/add-job',
      //   element: <AddJob />,
      // },
      // {
      //   path: '/my-posted-jobs',
      //   element: <MyPostedJobs />,
      // },
    ],



  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>


<Authprovider>
        <HelmetProvider>

          <RouterProvider router={router} />


        </HelmetProvider>


    


    </Authprovider>


  </StrictMode>,
)
