import {useState, useEffect} from 'react'
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/mess";
const krihsnaId = "68f90b35bb5ac9f73b127039"
const shyamId = "68f90b8cbb5ac9f73b12703a"
const anmolId = "68ebe04c0f7e4947f976b537"

const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];




function LunchPage() {
const [mess1,setMess1] = useState();
const [mess2,setMess2] = useState();
const [mess3,setMess3] = useState();

const [pmess1,setPMess1] = useState();
const [pmess2,setPMess2] = useState();
const [pmess3,setPMess3] = useState();

const [omess1,setOMess1] = useState(true);
const [omess2,setOMess2] = useState(true);
const [omess3,setOMess3] = useState(true);



 useEffect(() => {
    
    const fetchData = async () => {
     try{
        
        const res = await axios.get(`${BASE_URL}/${anmolId}/getLunch`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("anmol fetched")
    
        setMess1(res.data.lunch);
        setPMess1(res.data.price);
        setOMess1(res.data.openStatus);
      }
    else if(res.status === 404){
        alert("Mess not found");
    }
    else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Menu fetch error", err);
    alert(err.message?.response?.message || err.message || "Network error");
  }
    };

    const fetchData2 = async () => {
     try{
        
        const res = await axios.get(`${BASE_URL}/${krihsnaId}/getLunch`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("krishna fetched")
    
        setMess2(res.data.lunch);
         setPMess2(res.data.price);
           setOMess2(res.data.openStatus);
      }
    else if(res.status === 404){
        alert("Mess not found");
    }
    else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Menu fetch error", err);
    alert(err.message?.response?.message || err.message || "Network error");
  }
    };
    const fetchData3 = async () => {
     try{
        
        const res = await axios.get(`${BASE_URL}/${shyamId}/getLunch`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("shyam fetched")
    
        setMess3(res.data.lunch);
         setPMess3(res.data.price);
           setOMess3(res.data.openStatus);
      }
    else if(res.status === 404){
        alert("Mess not found");
    }
    else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Menu fetch error", err);
    alert(err.message?.response?.message || err.message || "Network error");
  }
    };

    fetchData(); 
    fetchData2(); 
    fetchData3(); 
  },[]);


  var dayOfWeek = new Date().getDay();
  dayOfWeek-= 1;
  if(dayOfWeek<0) dayOfWeek = 6;

  return (
    <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>

            <h1 className='font-heading text-4xl py-6 text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>{days[dayOfWeek]}'s Lunch</h1>

           <div className='flex flex-col gap-8'>


                 <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Anmol Mess and PGs</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 12:00 p.m. - 2:00 p.m.</p>
                    <p className='text-heading text-sm text-neutral-400'>Price - Rs. {pmess1?.[dayOfWeek]}</p>
                  
                  <div className='flex w-full justify-center items-center'>
                          <div className='py-4 px-3 w-[60%]'>
                          {mess1?.[dayOfWeek].map((ele, idx) => (
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
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed" value="Dine In" onClick={(e)=>{console.log(e.target.value)}} disabled={!omess1?.[dayOfWeek]}>
                                      Dine In
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess1?.[dayOfWeek]}>
                                      Takeaway
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess1?.[dayOfWeek]}>
                                      Home Delivery
                            </button>
                      </div>
                  </div>
                  
                 
                
            </div>

            <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Krishna Hospitality</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 12:00 p.m. - 2:00 p.m.</p>
                  <p className='text-heading text-sm text-neutral-400'>Price - Rs. {pmess2?.[dayOfWeek]}</p>
                  
                  <div className='flex w-full justify-center items-center'>
                          <div className='py-4 px-3 w-[60%]'>
                          {mess2?.[dayOfWeek].map((ele, idx) => (
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
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess2?.[dayOfWeek]}>
                                      Dine In
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess2?.[dayOfWeek]}>
                                      Takeaway
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess2?.[dayOfWeek]}>
                                      Home Delivery
                            </button>
                      </div>
                  </div>
                  
                 
                
            </div>


            <div className='w-full bg-[#1e1e1e] rounded-lg px-10'>

                  <h2 className='text-heading text-2xl pt-4'>Shree Shyam Mess</h2>
                  <p className='text-heading text-sm text-neutral-400'>Timing - 12:00 p.m. - 2:00 p.m.</p>
                  <p className='text-heading text-sm text-neutral-400'>Price - Rs. {pmess3?.[dayOfWeek]}</p>

                  
                  <div className='flex w-full justify-center items-center'>
                          <div className='py-4 px-3 w-[60%]'>
                          {mess3?.[dayOfWeek].map((ele, idx) => (
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
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess3?.[dayOfWeek]}>
                                      Dine In
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2]disabled:cursor-not-allowed " disabled={!omess3?.[dayOfWeek]}>
                                      Takeaway
                            </button>
                            <button 
                                  className=" h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 
                                  shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)]  cursor-pointer  rounded-xl
                                  transition-all duration-200 p-2                                  
                                  hover:text-black hover:before:scale-x-[2] disabled:cursor-not-allowed " disabled={!omess3?.[dayOfWeek]}>
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