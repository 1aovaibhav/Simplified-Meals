import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import MenuTable from './MenuTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/mess";

const shyamId = "68f90b8cbb5ac9f73b12703a"

// const mess3b = [
//   ["1 plate rice", "sambar", "papad"],
//   ["1 plate rice", "rajma", "salad"],
//   ["1 plate rice", "chole", "curd"],
//   ["1 plate rice", "dal fry", "pickle"],
//   ["1 plate rice", "paneer curry", "raita"],
//   ["1 plate rice", "matar curry", "papad"],
//   ["1 plate rice", "kadhi", "salad"]
// ];

// const mess3l = [
//   ["5 roti", "rice", "aloo baingan", "masoor dal", "papad"],
//   ["5 roti", "jeera rice", "matar mushroom", "moong dal", "curd"],
//   ["5 roti", "rice", "lauki chana", "dal fry", "onion salad"],
//   ["5 roti", "pulao", "paneer bhurji", "arhar dal", "raita"],
//   ["5 roti", "rice", "aloo shimla mirch", "chana dal", "pickle"],
//   ["5 roti", "lemon rice", "mix veg kofta", "moong dal", "salad"],
//   ["5 roti", "rice", "bhindi masala", "toor dal", "curd"]
// ];


// const mess3d = [
//   ["4 roti", "rice", "aloo capsicum", "dal fry", "salad"],
//   ["4 roti", "veg pulao", "kadai paneer", "moong dal", "pickle"],
//   ["4 roti", "rice", "lauki curry", "arhar dal", "raita"],
//   ["4 roti", "jeera rice", "mushroom masala", "masoor dal", "papad"],
//   ["4 roti", "rice", "bhindi masala", "toor dal", "curd"],
//   ["4 roti", "lemon rice", "rajma", "chana dal", "onion salad"],
//   ["4 roti", "rice", "mix veg curry", "dal tadka", "salad"]
// ];





function ShyamMess() {


  
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();

   useEffect(() => {
    
    const fetchData = async () => {
     try{
        
        const res = await axios.get(`${BASE_URL}/${shyamId}/getBreakfast`,
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
        
        const res = await axios.get(`${BASE_URL}/${shyamId}/getLunch`,
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
        
        const res = await axios.get(`${BASE_URL}/${shyamId}/getDinner`,
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
  },[]);


  return (
     <div className='text-white pt-14 min-h-screen bg-[#161616] flex justify-center border-b-1 border-b-white'>
        <div className='w-[80%] py-12 '>
            <div className='text-center py-6'>

                <h1 className='font-heading text-4xl text-[#efbd41] font-bold w-[80%] mx-auto text-center leading-16'>Shree Shyam Mess</h1>
                <p className='text-neutral-400'>Contact No. 98989XXXX</p>
                <div className='flex justify-center items-center gap-1'><CiLocationOn />  <p className='text-neutral-400'> H.N.40, Om Vihar Colony, Near Shankar Hotel, Ghaziabad</p></div>
            </div>


            <div>
                <MenuTable  breakfast={breakfast}
                            lunch={lunch}
                            dinner={dinner}
                />
            </div>
            
                
          

        </div>
    </div>
  )
}

export default ShyamMess