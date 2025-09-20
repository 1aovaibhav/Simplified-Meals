import React, { useState } from "react";
import { IoMdArrowBack   } from "react-icons/io";


import { Link } from "react-router-dom";
export default function LogInMess() {
  const [formData, setFormData] = useState({
   
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-1000">
      <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Link to="/">
             <button className="text-blue-400 flex justify-center items-center w-fit gap-0.5 font-extralight text-sm cursor-pointer hover:text-blue-600"> <IoMdArrowBack /> Go back Home</button>
        </Link>       
        <h2 className="text-2xl font-bold text-center mb-6 text-[#fff]">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
         
          
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send OTP
          </button>
        </form>
        
      </div>
    </div>  
  );
}
