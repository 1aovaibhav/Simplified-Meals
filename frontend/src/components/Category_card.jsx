import React from 'react'

function Category_card({image, time}) {
  return (
    <div className="relative w-full h-[200px] z-5 cursor-pointer rounded-[30px] flex justify-center items-center border-[#efbd41] border-3 hover:scale-102 transition " style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

         <div className="absolute inset-0 bg-[#1f1f1f9a] rounded-[30px] -z-10"></div>
            <h2 className='z-10 text-white font-heading text-5xl font-[800] select-none'>{time}</h2>
    </div>
  )
}

export default Category_card