
import { IoMdArrowBack   } from "react-icons/io";


import { Link } from "react-router-dom";
export default function RegisteredSuccess() {
 

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-1000">
      <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Link to="/">
             <button className="text-blue-400 flex justify-center items-center w-fit gap-0.5 font-extralight text-sm cursor-pointer hover:text-blue-600"> <IoMdArrowBack /> Go back Home</button>
        </Link>       
        <h2 className="text-2xl font-bold text-center mb-6 text-[#fff] py-8 leading-12">You are registered successfully. Please <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                  </Link> with your email.</h2>

        
      </div>
    </div>  
  );
}
