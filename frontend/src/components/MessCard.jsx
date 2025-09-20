import React from 'react'
import { CiLocationOn } from "react-icons/ci";

function MessCard({name,address}) {
  return (
    <div className='bg-white flex justify-between text-black p-4 rounded-2xl cursor-pointer hover:scale-102 transition duration-200'>

        <div className='text-3xl text-[#413a3a] font-bold font-sans'>{name}</div>
        <div className='flex gap-1 justify-center items-center'><CiLocationOn /> {address}</div>


    </div>
  )
}

export default MessCard