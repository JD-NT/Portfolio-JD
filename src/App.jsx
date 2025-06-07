import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Start from './Start'

function App() {

  return (
    <>
    <Outlet />
    <Start />
zz    </>
  )
}

/** 
<a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
*/

export default App
