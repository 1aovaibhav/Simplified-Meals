import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

function Home() {
return (
   <div className="h-screen w-screen bg-cover bg-center bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.6)_6%,#111_70%,black_100%),url('/home_wallpaper.jpg')]">
       <Navbar />
       <Hero />
   </div>
)
}

export default Home