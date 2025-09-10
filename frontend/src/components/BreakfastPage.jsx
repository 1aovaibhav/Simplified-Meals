import React from 'react'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const mess1 = [
  ["4 paratha", "aalo ki sabji", "chai"],
  ["4 paratha", "chole", "lassi"],
  ["4 paratha", "paneer butter masala", "chaas"],
  ["4 paratha", "mixed veg curry", "chai"],
  ["4 paratha", "rajma", "onion salad"],
  ["4 paratha", "baingan bharta", "curd"],
  ["4 paratha", "matar paneer", "chai"]
];

const mess2 = [
  ["4 roti", "dal tadka", "salad"],
  ["4 roti", "chana masala", "chaas"],
  ["4 roti", "palak paneer", "curd"],
  ["4 roti", "bhindi fry", "chai"],
  ["4 roti", "rajma", "lassi"],
  ["4 roti", "kadhi", "onion salad"],
  ["4 roti", "aloo gobi", "chaas"]
];

const mess3 = [
  ["1 plate rice", "sambar", "papad"],
  ["1 plate rice", "rajma", "salad"],
  ["1 plate rice", "chole", "curd"],
  ["1 plate rice", "dal fry", "pickle"],
  ["1 plate rice", "paneer curry", "raita"],
  ["1 plate rice", "matar curry", "papad"],
  ["1 plate rice", "kadhi", "salad"]
];


function BreakfastPage() {

  var dayOfWeek = new Date().getDay();

  return (
    <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>

            <h1 className='font-heading text-4xl py-6 text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>{days[dayOfWeek]}'s Breakfast</h1>

           <div className='flex flex-col gap-8'>


                 <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Mess 1</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 8:00 a.m. - 10:00 a.m.</p>
                    <p className='text-heading text-sm text-neutral-400'>Price - Rs. 40</p>
                  
                  <div className='flex w-full justify-center items-center'>
                          <div className='py-4 px-3 w-[60%]'>
                          {mess1[dayOfWeek].map((ele, idx) => (
                          <div key={idx} className="p-0.5 text-sm">
                                {ele.toUpperCase()}
                          </div>
                        ))}
                            </div>

                      <div className='flex gap-4 w-[40%] h-[50%]'>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Dine In
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Takeaway
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Home Delivery
                            </button>
                      </div>
                  </div>
                  
                 
                
            </div>

            <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Mess 2</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 8:00 a.m. - 10:00 a.m.</p>
                  <p className='text-heading text-sm text-neutral-400'>Price - Rs. 40</p>
                  
                  <div className='flex w-full justify-center items-center'>
                          <div className='py-4 px-3 w-[60%]'>
                          {mess2[dayOfWeek].map((ele, idx) => (
                          <div key={idx} className="p-0.5 text-sm">
                                {ele.toUpperCase()}
                          </div>
                        ))}
                            </div>

                      <div className='flex gap-4 w-[40%] h-[50%]'>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Dine In
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Takeaway
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Home Delivery
                            </button>
                      </div>
                  </div>
                  
                 
                
            </div>


            <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Mess 3</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 8:00 a.m. - 10:00 a.m.</p>
                  <p className='text-heading text-sm text-neutral-400'>Price - Rs. 40</p>

                  
                  <div className='flex w-full justify-center items-center'>
                          <div className='py-4 px-3 w-[60%]'>
                          {mess3[dayOfWeek].map((ele, idx) => (
                          <div key={idx} className="p-0.5 text-sm">
                                {ele.toUpperCase()}
                          </div>
                        ))}
                            </div>

                      <div className='flex gap-4 w-[40%] h-[50%]'>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Dine In
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Takeaway
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] ">
                                      Home Delivery
                            </button>
                      </div>
                  </div>
                  
                 
                
            </div>


           </div>

        </div>
    </div>
  )
}

export default BreakfastPage