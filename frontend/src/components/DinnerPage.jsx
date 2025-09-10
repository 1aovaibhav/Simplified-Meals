import React from 'react'
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const mess1 = [
  ["4 roti", "rice", "aloo tamatar curry", "moong dal", "salad"],
  ["4 roti", "jeera rice", "methi matar malai", "dal fry", "raita"],
  ["4 roti", "rice", "lauki chana dal curry", "masoor dal", "pickle"],
  ["4 roti", "veg pulao", "shahi paneer", "toor dal", "onion salad"],
  ["4 roti", "rice", "bhindi do pyaza", "arhar dal", "curd"],
  ["4 roti", "lemon rice", "kadhi pakora", "chana dal", "papad"],
  ["4 roti", "rice", "mix veg curry", "dal tadka", "salad"]
];


const mess2 = [
  ["4 roti", "rice", "aloo palak", "dal makhani", "salad"],
  ["4 roti", "pulao", "paneer butter masala", "moong dal", "raita"],
  ["4 roti", "rice", "tinda sabji", "masoor dal", "pickle"],
  ["4 roti", "jeera rice", "chole", "chana dal", "curd"],
  ["4 roti", "rice", "gobi matar", "dal fry", "papad"],
  ["4 roti", "lemon rice", "lauki kofta", "toor dal", "onion salad"],
  ["4 roti", "rice", "bhindi fry", "arhar dal", "salad"]
];


const mess3 = [
  ["4 roti", "rice", "aloo capsicum", "dal fry", "salad"],
  ["4 roti", "veg pulao", "kadai paneer", "moong dal", "pickle"],
  ["4 roti", "rice", "lauki curry", "arhar dal", "raita"],
  ["4 roti", "jeera rice", "mushroom masala", "masoor dal", "papad"],
  ["4 roti", "rice", "bhindi masala", "toor dal", "curd"],
  ["4 roti", "lemon rice", "rajma", "chana dal", "onion salad"],
  ["4 roti", "rice", "mix veg curry", "dal tadka", "salad"]
];




function DinnerPage() {
   var dayOfWeek = new Date().getDay();

  return (
    <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>

            <h1 className='font-heading text-4xl py-6 text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>{days[dayOfWeek]}'s Dinner</h1>

           <div className='flex flex-col gap-8'>


                 <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Mess 1</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 8:00 p.m - 10:00 p.m.</p>
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
                  <p className='text-heading text-sm text-neutral-400'>Timing - 7:30 p.m. - 10:00 p.m.</p>
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
                  <p className='text-heading text-sm text-neutral-400'>Timing - 7:30 p.m. - 9:30 p.m.</p>
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

export default DinnerPage