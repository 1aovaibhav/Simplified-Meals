import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from 'react';

const BASE_URL = "http://localhost:5000/api/v1/mess";

function MyMess() {
  const { auth } = useAuth();
  const id = auth?.user?._id
   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();

   useEffect(() => {
    if(!id) return;
    const fetchData = async () => {
     try{
        
        const res = await axios.get(`${BASE_URL}/${id}/getBreakfast`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("breakfast fetched")
    
        setBreakfast(res.data.breakfast);
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
        
        const res = await axios.get(`${BASE_URL}/${id}/getLunch`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("lunch fetched")
    
        setLunch(res.data.lunch);
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
        
        const res = await axios.get(`${BASE_URL}/${id}/getDinner`,
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        console.log("dinner fetched")
    
        setDinner(res.data.dinner);
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
  },[id]);

  return (
    <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>
           
           <div className='text-center py-6'>
           
                           <h1 className='font-heading text-4xl text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>{auth?.user?.name}</h1>
                           <p className='text-neutral-400'>Contact No. {auth?.user?.phone}</p>
                           <div className='flex justify-center items-center gap-1'><CiLocationOn />  <p className='text-neutral-400'> {auth?.user?.address}</p></div>
           </div>
           <div>
                <table className="table-auto border-collapse border border-gray-400 w-full text-sm text-black">
              <thead>
                <tr className="bg-blue-500 ">
                  <th className="border border-gray-400 px-4 py-2">Day</th>
                  <th className="border border-gray-400 px-4 py-2">Breakfast</th>
                  <th className="border border-gray-400 px-4 py-2">Lunch</th>
                  <th className="border border-gray-400 px-4 py-2">Dinner</th>
                </tr>
              </thead>
          
              <tbody>
                {days.map((day, i) => (
                  <tr
                    key={day}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <td className="border border-gray-400 px-4 py-2 font-semibold">{day}</td>
                    
                    <td className="border border-gray-400 px-4 py-2 cursor-pointer">
                      <Link to={`/updatemenu?id=${id}&day=${day.toLowerCase()}&meal=breakfast`}>
                      {breakfast?.[i].join(", ") || "Please update this item"} 
                     
                      </Link>                   
                    </td>
                    {console.log(dinner)}
                    
                    
                    <td className="border border-gray-400 px-4 py-2 cursor-pointer">
                       <Link to={`/updatemenu?id=${id}&day=${day.toLowerCase()}&meal=lunch`}>
                      {lunch?.[i].join(", ") || "Please update this item"}   
                      </Link>  
                    </td>
              
                    
                    <td className="border border-gray-400 px-4 py-2 cursor-pointer">
                      <Link to={`/updatemenu?id=${id}&day=${day.toLowerCase()}&meal=dinner`}>
                      {dinner?.[i].join(", ") || "Please update this item"}   
                      </Link>  
                    </td>
                 
                  </tr>
                ))}
              </tbody>
                </table>
           </div>

        </div>
    </div>
  )
}

export default MyMess