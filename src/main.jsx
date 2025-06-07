import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Start from './Start.jsx'
import NavBar from './NavBar.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'
import './App.css'
import About from './About.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/Portfolio-JD/",
    element: <Start />,
    children: [
      {
        path: "/Portfolio-JD/",
        element: <Home />,
      },
      {
        path: "/Portfolio-JD/About",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)