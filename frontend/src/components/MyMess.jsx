import React, { useState } from 'react'
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from 'react';
import {io} from "socket.io-client"

const socket = io("http://localhost:5000");
const BASE_URL = "http://localhost:5000/api/v1/mess";

function MyMess() {
  const { auth , isAuthenticated, logout} = useAuth();
  const navigate = useNavigate();
  const handleLogout =  () => {
    logout();
    navigate("/");
  }
    const userName = auth?.user?.name?.split(" ")[0] || "";
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


  const [orders, setOrders] = useState([]);

   const fetchOrders = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/order/${id}`);
      if (res.data.success) setOrders(res.data.orders);
    } catch (err) {
      console.error(err);
    }
  };

  const handleComplete = async (orderId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/order/complete/${orderId}`);
      if (res.data.success) {
        setOrders((prev) => prev.filter((o) => o._id !== orderId));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if(!id) return;
    fetchOrders();

    socket.on("new-order", (order) => {
      if (order.messId === id) setOrders((prev) => [...prev, order]);
    });

    socket.on("order-completed", (completedOrder) => {
      if (completedOrder.messId === id)
        setOrders((prev) => prev.filter((o) => o._id !== completedOrder._id));
    });

    return () => {
      socket.off("new-order");
      socket.off("order-completed");
    };
  }, [id]);



  return (
  <div className="min-h-screen bg-[#0b0b0b] text-white">
    {/* Header Section */}
    <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-between items-center py-4 mx-auto gap-4">
      {/* Logo */}
      <div className="flex flex-wrap justify-center items-center text-[1.7rem] gap-2">
        <div className="flex justify-center items-center">
          <span
            className="text-[2.2rem] text-[#fea116] [text-shadow:5px_5px_5px_#0000003d]"
            style={{ fontFamily: "Jokerman" }}
          >
            S
          </span>
          <p
            className="text-2xl text-[#fea116] font-bold [text-shadow:5px_5px_5px_#0000003d]"
            style={{ fontFamily: "cursive" }}
          >
            implified
          </p>
        </div>
        <div className="flex justify-center items-center">
          <span
            className="text-[2.2rem] text-[#fea116] [text-shadow:5px_5px_5px_#0000003d]"
            style={{ fontFamily: "Jokerman" }}
          >
            M
          </span>
          <p
            className="text-2xl text-[#fea116] font-bold [text-shadow:5px_5px_5px_#0000003d]"
            style={{ fontFamily: "cursive" }}
          >
            eals
          </p>
        </div>
      </div>

      {/* Auth Section */}
      {isAuthenticated && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <span className="text-white text-base sm:text-lg text-center sm:text-left">
            Hello, {userName}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      )}
    </div>

    {/* User Info Section */}
    <div className="w-[90%] md:w-[80%] py-8 md:py-12 mx-auto">
      <div className="text-center py-4 md:py-6">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#efbd41] font-bold w-full sm:w-[80%] mx-auto leading-relaxed break-words">
          {auth?.user?.name}
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base">
          Contact No. {auth?.user?.phone}
        </p>
        <div className="flex justify-center items-center gap-1 text-sm sm:text-base text-neutral-400 mt-1">
          <CiLocationOn /> <p>{auth?.user?.address}</p>
        </div>
      </div>

      {/* Menu Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-400 text-sm sm:text-base text-black bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-400 px-3 sm:px-4 py-2">Day</th>
              <th className="border border-gray-400 px-3 sm:px-4 py-2">Breakfast</th>
              <th className="border border-gray-400 px-3 sm:px-4 py-2">Lunch</th>
              <th className="border border-gray-400 px-3 sm:px-4 py-2">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day, i) => (
              <tr
                key={day}
                className={`${i % 2 === 0 ? "bg-white" : "bg-gray-100"} text-gray-800`}
              >
                <td className="border border-gray-400 px-3 sm:px-4 py-2 font-semibold">
                  {day}
                </td>

                <td className="border border-gray-400 px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-200">
                  <Link to={`/updatemenu?id=${id}&day=${day.toLowerCase()}&meal=breakfast`}>
                    {breakfast?.[i].join(", ") || "Please update this item"}
                  </Link>
                </td>

                <td className="border border-gray-400 px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-200">
                  <Link to={`/updatemenu?id=${id}&day=${day.toLowerCase()}&meal=lunch`}>
                    {lunch?.[i].join(", ") || "Please update this item"}
                  </Link>
                </td>

                <td className="border border-gray-400 px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-200">
                  <Link to={`/updatemenu?id=${id}&day=${day.toLowerCase()}&meal=dinner`}>
                    {dinner?.[i].join(", ") || "Please update this item"}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Orders Section */}
      <div className="w-full mx-auto py-8 md:py-10 text-white bg-[#111] mt-10 rounded-xl shadow-md">
        <div className="w-[90%] mx-auto text-center md:text-left mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#efbd41]">
            Total Orders: {orders.length}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] mx-auto">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-600 bg-[#1a1a1a] p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-lg text-[#fea116] mb-2">
                {order.userDetails.name}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base">
                Phone: {order.userDetails.phone}
              </p>
              <p className="text-neutral-300 text-sm sm:text-base">
                Address: {order.userDetails.address || "N/A"}
              </p>
              <p className="text-neutral-300 text-sm sm:text-base">
                Meal Type: <span className="text-white">{order.mealType}</span>
              </p>
              <p className="text-neutral-300 text-sm sm:text-base">
                Order Type: <span className="text-white">{order.orderType}</span>
              </p>
              <p className="font-semibold text-white mt-2">
                Total: ₹{order.totalAmount}
              </p>
              <button
                className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm sm:text-base w-full sm:w-auto"
                onClick={() => handleComplete(order._id)}
              >
                Completed
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

}

export default MyMess