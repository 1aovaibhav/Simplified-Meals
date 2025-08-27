import React from 'react'

function Navbar() {
  return (
    <div className='bg-transparent w-screen flex justify-center items-center h-auto'>
        <div className=' w-[80%] flex justify-between items-center h-auto py-4'>
            
            <div className="flex justify-center items-center text-[1.7rem] m-0 gap-2">
                        <div className='flex justify-center items-center'>

                        <span className="text-[2.2rem] text-[#fea116] [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'Jokerman'}}>S</span>
                        <p className=" text-2xl text-[#fea116] font-bold  [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'cursive'}}>implified </p>
                        </div>
                        <div className='flex justify-center items-center'>

                        <span className="text-[2.2rem] text-[#fea116] [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'Jokerman'}}>M</span>
                        <p className=" text-2xl text-[#fea116] font-bold  [text-shadow:5px_5px_5px_#0000003d]" style={{fontFamily: 'cursive'}}>eals </p>
                        </div>
                       
            </div>

            <div className='flex justify-center items-center gap-10'>

                <a href="" className='font-heading font-medium text-xl text-amber-50'>Home</a>
                <a href="" className='font-heading font-medium text-xl text-amber-50'>Menu</a>
                <a href="" className='font-heading font-medium text-xl text-amber-50'>Messes</a>
                <a href="" className='font-heading font-medium text-xl text-amber-50'>Contact Us</a>

            </div>

            <div className='flex justify-center items-center gap-4'>
                <button 
                      class="relative h-[40px] w-[120px] text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                      shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl
                      transition-all duration-200
                      before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                      before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                      before:transition-all before:duration-600
                      hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]">
                          User LogIn
                </button>
                <button 
                      class="relative h-[40px] w-[120px] text-[1rem] bg-red-600 text-white border-[3px] border-red-600 
                      shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl 
                      transition-all duration-200
                      before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                      before:scale-x-0 before:-translate-x-[50px] before:origin-left before:rounded-full 
                      before:transition-all before:duration-600
                      hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]">
                          Mess LogIn
                </button>
            </div>


        </div>
    </div>
  )
}

export default Navbar