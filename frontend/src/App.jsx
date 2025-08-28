import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu_category from './components/Menu_category'
import ContactForm from './components/ContactForm'

function App() {




  
  return (
    <div  className='bg-gray-950 h-screen w-[100%] '>
      <Home />

      <Menu_category />
      <ContactForm />
    </div>
  )
}

export default App