import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu_category from './components/Menu_category'

function App() {
  return (
    <div className='bg-gray-950 h-screen w-screen'>
      <Home />
      <Menu_category />
    </div>
  )
}

export default App