import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack   } from "react-icons/io";
import { register } from "../api/user.js";


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
   const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setDisable(true);
     const nameRegex = /^[A-Za-z\s]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters and spaces only).");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (address.trim().length < 5) {
      alert("Please enter a valid address (at least 5 characters).");
      return;
    }

    let data = await register(name, email, address, phone, navigate);
    console.log(data)
      setDisable(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-1000">
      <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Link to="/">
                     <button className="text-blue-400 flex justify-center items-center w-fit gap-0.5 font-extralight text-sm cursor-pointer hover:text-blue-600"> <IoMdArrowBack /> Go back Home</button>
        </Link>   
        <h2 className="text-2xl font-bold text-center mb-6 text-[#fff]">Register User</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
      
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
 
             onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={phone}
             onChange={e => setPhone(e.target.value)}   
 
            maxLength="10"       
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
             onChange={e => setAddress(e.target.value)}
            required
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          
          <button
          type="button"
            onClick={handleSubmit}
            disabled = {disable}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:cursor-not-allowed"
          >
            Register
          </button>
        </form>
        <p className="text-center text-[#fff] mt-6 ">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
