import React from 'react'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import Projects from './Projects.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function Start() { return (
    <>
    <NavBar />
    <Outlet />
    </>
    )
}

export default Start