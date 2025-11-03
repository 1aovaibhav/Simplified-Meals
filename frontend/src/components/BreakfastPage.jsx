import {useState, useEffect} from 'react'
import axios from 'axios'

import { useAuth } from '../context/useAuth';
const BASE_URL = "https://simplified-meals.onrender.com/api/v1/mess";
const krihsnaId = "68f90b35bb5ac9f73b127039"
const shyamId = "68f90b8cbb5ac9f73b12703a"
const anmolId = "68ebe04c0f7e4947f976b537"

const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];




function BreakfastPage() {
const [mess1,setMess1] = useState();
const [mess2,setMess2] = useState();
const [mess3,setMess3] = useState();

const [pmess1,setPMess1] = useState();
const [pmess2,setPMess2] = useState();
const [pmess3,setPMess3] = useState();

const [omess1,setOMess1] = useState(true);
const [omess2,setOMess2] = useState(true);
const [omess3,setOMess3] = useState(true);

const {auth} =  useAuth();





 useEffect(() => {
    
    const fetchData = async () => {
     try{
        
        const res = await axios.get(`${BASE_URL}/${anmolId}/getBreakfast`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("anmol fetched")
    
        setMess1(res.data.breakfast);
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
        
        const res = await axios.get(`${BASE_URL}/${krihsnaId}/getBreakfast`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("krishna fetched")
    
        setMess2(res.data.breakfast);
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
        
        const res = await axios.get(`${BASE_URL}/${shyamId}/getBreakfast`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("shyam fetched")
    
        setMess3(res.data.breakfast);
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

  
  
  const handleOrder = async (e) => {
 console.log(auth.user);
  const qty = prompt("Enter quantity:");
 
   if (!qty || Number(qty) < 1 || Number(qty) > 9) {
  alert("Please enter a valid quantity between 1 and 9");
  return;
}


  try {
 
    const res = await axios.post("https://simplified-meals.onrender.com/api/v1/order/place", {
      userId: auth?.user?._id,
      messId: anmolId,
      items: [{ name: `${days[dayOfWeek]}'s Breakfast`, price: pmess1?.[dayOfWeek], qty: Number(qty) }],
      totalAmount: pmess1?.[dayOfWeek] * Number(qty),
      mealType: "breakfast",
     
      orderType: e.target.value,
    
      userDetails: {
        name: auth?.user?.name,
        phone: auth?.user?.phone,
        address: auth?.user?.address
      }
    });
    console.log(res)
   
    if (res.status === 200) alert("Order placed successfully!");
  } catch (err) {
    alert("Error placing order", err);
  }
};
  const handleOrder2 = async (e) => {
  
  const qty = prompt("Enter quantity:");
  const phoneRegex = /^[0-9]{1}$/;
    if (!phoneRegex.test(qty)) {
      alert("Please enter a valid quantity below 10");
      return;
    }
  if (!qty) return;

  try {
    const res = await axios.post("https://simplified-meals.onrender.com/api/v1/order/place", {
      userId: auth?.user?._id,
      messId: krihsnaId,
      mealType: "breakfast",
      items: [{ name: `${days[dayOfWeek]}'s Breakfast`, price: pmess2?.[dayOfWeek], qty: Number(qty) }],
     
      orderType: e.target.value,
      totalAmount: pmess2?.[dayOfWeek] * Number(qty),
    
      userDetails: {
        name: auth?.user?.name,
        phone: auth?.user?.phone,
        address: auth?.user?.address
      }
    });
    if (res.status === 200) alert("Order placed successfully!");
  } catch (err) {
    alert("Error placing order", err);
  }
};
  const handleOrder3 = async (e) => {
  
  const qty = prompt("Enter quantity:");
  const phoneRegex = /^[0-9]{1}$/;
    if (!phoneRegex.test(qty)) {
      alert("Please enter a valid quantity below 10");
      return;
    }
  if (!qty) return;

  try {
    const res = await axios.post("https://simplified-meals.onrender.com/api/v1/order/place", {
      userId: auth?.user?._id,
      messId: shyamId,
      mealType: "breakfast",
      items: [{ name: `${days[dayOfWeek]}'s Breakfast`, price: pmess3?.[dayOfWeek], qty: Number(qty) }],
     
      orderType: e.target.value,
      totalAmount: pmess3?.[dayOfWeek] * Number(qty),
    
      userDetails: {
        name: auth?.user?.name,
        phone: auth?.user?.phone,
        address: auth?.user?.address
      }
    });
    if (res.status === 200) alert("Order placed successfully!");
  } catch (err) {
    alert("Error placing order", err);
  }
};

return (
  <div className="text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b border-b-white">
    <div className="w-[90%] md:w-[80%] py-12">
      <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl py-6 text-[#efbd41] font-bold w-full md:w-[80%] mx-auto text-center leading-relaxed">
        {days[dayOfWeek]}'s Breakfast
      </h1>

      <div className="flex flex-col gap-8">
        {/* Mess 1 */}
        <div className="w-full bg-[#1e1e1e] rounded-lg px-4 sm:px-8 md:px-10 py-4">
          <h2 className="text-heading text-xl sm:text-2xl pt-2 sm:pt-4">Anmol Mess and PGs</h2>
          <p className="text-heading text-sm text-neutral-400">Timing - 8:00 a.m. - 10:00 a.m.</p>
          <p className="text-heading text-sm text-neutral-400">Price - Rs. {pmess1?.[dayOfWeek]}</p>

          <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <div className="py-4 px-2 sm:px-3 w-full md:w-[60%] text-center md:text-left">
              {mess1?.[dayOfWeek].map((ele, idx) => (
                <div key={idx} className="p-0.5 text-sm sm:text-base">
                  {ele.toUpperCase()}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-[40%] mt-2 md:mt-0">
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="dinein"
                onClick={handleOrder}
                disabled={!omess1?.[dayOfWeek] || auth.user == null}
              >
                Dine In
              </button>
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="takeaway"
                onClick={handleOrder}
                disabled={!omess1?.[dayOfWeek] || auth.user == null}
              >
                Takeaway
              </button>
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="delivery"
                onClick={handleOrder}
                disabled={!omess1?.[dayOfWeek] || auth.user == null}
              >
                Home Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Mess 2 */}
        <div className="w-full bg-[#1e1e1e] rounded-lg px-4 sm:px-8 md:px-10 py-4">
          <h2 className="text-heading text-xl sm:text-2xl pt-2 sm:pt-4">Krishna Hospitality</h2>
          <p className="text-heading text-sm text-neutral-400">Timing - 8:00 a.m. - 10:00 a.m.</p>
          <p className="text-heading text-sm text-neutral-400">Price - Rs. {pmess2?.[dayOfWeek]}</p>

          <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <div className="py-4 px-2 sm:px-3 w-full md:w-[60%] text-center md:text-left">
              {mess2?.[dayOfWeek].map((ele, idx) => (
                <div key={idx} className="p-0.5 text-sm sm:text-base">
                  {ele.toUpperCase()}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-[40%] mt-2 md:mt-0">
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="dinein"
                onClick={handleOrder2}
                disabled={!omess2?.[dayOfWeek] || auth.user == null}
              >
                Dine In
              </button>
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="takeaway"
                onClick={handleOrder2}
                disabled={!omess2?.[dayOfWeek] || auth.user == null}
              >
                Takeaway
              </button>
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="delivery"
                onClick={handleOrder2}
                disabled={!omess2?.[dayOfWeek] || auth.user == null}
              >
                Home Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Mess 3 */}
        <div className="w-full bg-[#1e1e1e] rounded-lg px-4 sm:px-8 md:px-10 py-4">
          <h2 className="text-heading text-xl sm:text-2xl pt-2 sm:pt-4">Shree Shyam Mess</h2>
          <p className="text-heading text-sm text-neutral-400">Timing - 8:00 a.m. - 10:00 a.m.</p>
          <p className="text-heading text-sm text-neutral-400">Price - Rs. {pmess3?.[dayOfWeek]}</p>

          <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <div className="py-4 px-2 sm:px-3 w-full md:w-[60%] text-center md:text-left">
              {mess3?.[dayOfWeek].map((ele, idx) => (
                <div key={idx} className="p-0.5 text-sm sm:text-base">
                  {ele.toUpperCase()}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-[40%] mt-2 md:mt-0">
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="dinein"
                onClick={handleOrder3}
                disabled={!omess3?.[dayOfWeek] || auth.user == null}
              >
                Dine In
              </button>
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="takeaway"
                onClick={handleOrder3}
                disabled={!omess3?.[dayOfWeek] || auth.user == null}
              >
                Takeaway
              </button>
              <button
                className="h-auto w-full text-sm bg-white font-bold text-red-600 border-red-600 shadow-[5px_5px_7px_0px_rgba(0,0,0,0.25)] cursor-pointer rounded-xl transition-all duration-200 p-2 hover:text-black disabled:cursor-not-allowed"
                value="delivery"
                onClick={handleOrder3}
                disabled={!omess3?.[dayOfWeek] || auth.user == null}
              >
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