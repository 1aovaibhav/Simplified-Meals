
import React from 'react'
import Home from './Home'
import Menu_category from './Menu_category'
import ContactForm from './ContactForm'
import Footer from './Footer'

function HomePage() {
  return (
    <div  className='bg-gray-950 h-screen w-[100%] '>
        <Home />

      <Menu_category />
      <ContactForm />
      <Footer />
  


     


    </div>
  )
}

export default HomePage