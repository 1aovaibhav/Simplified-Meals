import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack   } from "react-icons/io";
export default function RegisterMess() {
  const [formData, setFormData] = useState({
    name: "",
    owner:"",
    address: "",
    phone: "",
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
        <h2 className="text-2xl font-bold text-center mb-6 text-[#fff]">Register Mess</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Mess Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="owner"
            placeholder="Owner's Name"
            value={formData.owner}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="address"
            placeholder="Mess Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-[#fff] mt-6 ">
          Already have an account?{" "}
          <Link to="/loginmess" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
