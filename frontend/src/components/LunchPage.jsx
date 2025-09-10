import React from 'react'
const mess1 = [
  ["5 roti", "rice", "baingan bharta", "arhar dal", "salad"],
  ["5 roti", "jeera rice", "chole", "moong dal", "papad"],
  ["5 roti", "rice", "aloo gobi", "masoor dal", "curd"],
  ["5 roti", "pulao", "matar paneer", "toor dal", "onion salad"],
  ["5 roti", "rice", "bhindi fry", "chana dal", "raita"],
  ["5 roti", "lemon rice", "kadhi pakora", "arhar dal", "pickle"],
  ["5 roti", "rice", "mixed veg curry", "dal fry", "salad"]
];

const mess2 = [
  ["5 roti", "rice", "aloo matar", "moong dal", "salad"],
  ["5 roti", "veg pulao", "chana masala", "masoor dal", "raita"],
  ["5 roti", "rice", "lauki ki sabji", "arhar dal", "papad"],
  ["5 roti", "jeera rice", "palak paneer", "chana dal", "onion salad"],
  ["5 roti", "rice", "tinda sabji", "dal fry", "curd"],
  ["5 roti", "pulao", "gatte ki sabji", "moong dal", "pickle"],
  ["5 roti", "rice", "karela fry", "toor dal", "salad"]
];

const mess3 = [
  ["5 roti", "rice", "aloo baingan", "masoor dal", "papad"],
  ["5 roti", "jeera rice", "matar mushroom", "moong dal", "curd"],
  ["5 roti", "rice", "lauki chana", "dal fry", "onion salad"],
  ["5 roti", "pulao", "paneer bhurji", "arhar dal", "raita"],
  ["5 roti", "rice", "aloo shimla mirch", "chana dal", "pickle"],
  ["5 roti", "lemon rice", "mix veg kofta", "moong dal", "salad"],
  ["5 roti", "rice", "bhindi masala", "toor dal", "curd"]
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function LunchPage() {
   var dayOfWeek = new Date().getDay();

  return (
    <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>

            <h1 className='font-heading text-4xl py-6 text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>{days[dayOfWeek]}'s Lunch</h1>

           <div className='flex flex-col gap-8'>


                 <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Mess 1</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 12:00 noon - 2:00 p.m.</p>
                    <p className='text-heading text-sm text-neutral-400'>Price - Rs. 60</p>
                  
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
                  <p className='text-heading text-sm text-neutral-400'>Timing - 12:20 p.m. - 2:00 p.m.</p>
                  <p className='text-heading text-sm text-neutral-400'>Price - Rs. 65</p>
                  
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
                  <p className='text-heading text-sm text-neutral-400'>Timing - 12:30 p.m. - 2:30 p.m.</p>
                  <p className='text-heading text-sm text-neutral-400'>Price - Rs. 70</p>

                  
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

export default LunchPage