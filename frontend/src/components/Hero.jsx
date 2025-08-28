import React from 'react'

function Hero() {
return (
    <div id="home" className='flex flex-col h-fit w-[80vw] mx-auto justify-around items-center py-40'>
        <h2 className='font-stylish tracking-widest text-2xl py-4 text-[#ffffff] font-medium'>
            Because your plate deserves options
        </h2>
        <h1 className='font-heading text-5xl py-6 text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>
            Bringing You The Best Food Choices, Whenever You're Hungry.
        </h1>
        <p className=' text-[#FFFFFF] font-para text-md w-[60%] text-center font-light py-3 pb-10'>
            Explore a myriad of meal options available in your locality meticulously curated for you, ensuring you can make informed choices that
            align seamlessly with your preferences. We turn the struggle of not having options into the joy of always having them.
        </p>

        

        <button 
                      className=" relative h-[50px] w-[170px] text-[1.2rem] bg-red-600 text-white border-[3px] border-red-600 
                      shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer z-[1] rounded-xl
                      transition-all duration-200
                      before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10
                      before:scale-x-0  before:origin-left before:rounded-full 
                      before:transition-all before:duration-600
                      hover:text-black hover:before:scale-x-[2] hover:before:-translate-x-[50px]"
                       onClick={() => window.location.href = "#menu"}>
                          Explore Options
        </button>
    </div>
)
}

export default Hero