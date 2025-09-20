import React from 'react'
import MessCard from './MessCard'
import { Link } from 'react-router-dom'

function MessHome() {
  return (
    <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>

            <h1 className='font-heading text-4xl py-6 text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>Our Trusted Partners</h1>

             <div className='flex flex-col gap-10 p-5'>
                <Link to={"/v1/anmolmess"}>
                    <MessCard name="Anmol Mess and PGs" address="H.N.40, Om Vihar Colony, Near Shankar Hotel, Ghaziabad " />
                </Link>
                <Link to={"/v1/krishnamess"}>
                    <MessCard name="Krishna Hospitality" address="H.N.40, Om Vihar Colony, Near Shankar Hotel, Ghaziabad " />
                </Link>
                <Link to={"/v1/shyammess"}>
                    <MessCard name="Shree Shyam Mess" address="H.N.40, Om Vihar Colony, Near Shankar Hotel, Ghaziabad " />
                </Link>
                
                
                
             </div>
                
          

        </div>
    </div>
  )
}

export default MessHome