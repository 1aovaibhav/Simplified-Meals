import React, { useState } from "react";
import { IoMdArrowBack   } from "react-icons/io";
import { Link , useNavigate} from "react-router-dom";
import { sendOTP } from "../api/mess.js";
import { verifyOTP } from "../api/mess.js";
import { useAuth } from "../context/useAuth.js";


export default function LogIn() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [disable, setDisable] = useState(false);

  const handleSubmit = async () => {
    
       setDisable(true);
      console.log("butoto press")

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
     
      let data = await sendOTP(email);

      if(data) setShowInput(true);
      setDisable(false);
  };

  const handleVerify = async () => {
    setDisable(true);
    const phoneRegex = /^[0-9]{6}$/;
    if (!phoneRegex.test(otp)) {
      alert("Please enter a valid 6 digit OTP.");
      return;
    }

    let res = await verifyOTP(email, otp);
    
    if(res && res.success){
        const payload = {
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
          user: res.data.user,
        };
        login(payload);
       navigate('/mymess');
    }
    else {
        alert(res?.message || "OTP verification failed");
      }
      setDisable(false);

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-1000">
      <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Link to="/">
             <button className="text-blue-400 flex justify-center items-center w-fit gap-0.5 font-extralight text-sm cursor-pointer hover:text-blue-600"> <IoMdArrowBack /> Go back Home</button>
        </Link>       
        <h2 className="text-2xl font-bold text-center mb-6 text-[#fff]">Login</h2>
        <form className="space-y-4">
         
          
          
          <input
            type="email"
            name="email"
            placeholder="Email"

            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {showInput && <input
            input type="text" pattern="\d{6}" maxlength="6"
            name="otp"
            placeholder="Enter 6 - digit OTP"
            value={otp}
            required
            onChange={e => setOtp(e.target.value)}
            className="w-full p-3 border rounded-lg text-[#fff] focus:outline-none focus:ring-2 focus:ring-blue-400 "
          />}
          {!showInput && <button
            type="button"
            onClick={handleSubmit}
             disabled = {disable}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:cursor-not-allowed"
          >
            Send OTP
          </button>
          }     
          {showInput && <button
            type="button"
             disabled = {disable}
            onClick={handleVerify}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition disabled:cursor-not-allowed"
          >
            Verify OTP
          </button>
          }     
        </form>
       
      </div>
    </div>  
  );
}
