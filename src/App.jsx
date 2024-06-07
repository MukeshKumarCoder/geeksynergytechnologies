import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Movies from './Pages/Movies/Movies'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/movies' element={<Movies/>} />
      </Routes>
    </div>
  )
}

export default App
