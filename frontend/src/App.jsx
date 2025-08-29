import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu_category from './components/Menu_category'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import LogIn from './components/LogIn'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register'
import HomePage from './components/HomePage'


function App() {




  
  return (
    <div className='bg-gray-950 h-screen w-[100%]'>
 
  


      <BrowserRouter basename="/Simplified-Meals">
      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>


    </div>
  )
}

export default App