import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Responsive.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "@/routes/root";
import Projects from "@/pages/Projects";
import ErrorPage from "@/pages/error-page";
import "@/pages/Home";
import Home from '@/pages/Home';
import Contact from './pages/Contact';
import config from '@/config';
import Editor from './pages/Editor';

const router = createBrowserRouter([
  {
    path: config.basePath,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: config.basePath,
        element: <Home />
      },
      {
        path: config.basePath +"projects",
        element: <Projects />,
      },
      {
        path: config.basePath + "contact",
        element: <Contact/>,
      },
      {
        path: config.basePath + "editor",
        element: <Editor/>,
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
