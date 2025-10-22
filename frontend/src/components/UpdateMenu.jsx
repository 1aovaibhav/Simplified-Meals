import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowBack   } from "react-icons/io";
import { updateMENU } from "../api/mess.js";


export default function UpdateMenu() {

   const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
    
    const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const meal = query.get("meal");
  const day = query.get("day");


 const [items, setItems] = useState([""]);
 const [price, setPrice] = useState("65");
 const [open, isOpen] = useState(true);


  const addInput = () => {
    setItems([...items, ""]);
  };

  const handleChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
   
  };

  const handleSubmit = async() => {
 
    const phoneRegex = /^[0-9]/;
    if (!phoneRegex.test(price)) {
      alert("Please enter a valid price in digits");
      return;
    }
    setDisable(true);
    items.filter(item => item.trim() !== "");
  
   
    let res = await updateMENU(items, Number(price) , open, id, day, meal);
    if(res && res.success){
      navigate("/v1/mymess");
    }



    setDisable(false);
    
  
    
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-1000">
      <div className="bg-[#1e1e1e] shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Link to="/v1/mymess">
                     <button className="text-blue-400 flex justify-center items-center w-fit gap-0.5 font-extralight text-sm cursor-pointer hover:text-blue-600"> <IoMdArrowBack /> Go back</button>
        </Link>   
        <h2 className="text-2xl font-bold text-center mb-6 text-[rgb(255,255,255)]">Update Menu</h2>
        
        <div className="flex flex-col gap-2 justify-center items-baseline py-4">
                 {items.map((item, index) => (
                    <input
                    key={index}
                    type="text"
                    placeholder={`Item ${index + 1}`}
                    value={item}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="border border-gray-400 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                ))}

                        <button
                            onClick={addInput}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition mt-2"
                        >
                            Add More
                        </button>

        </div>

        <div className="flex items-baseline gap-4 justify-between w-full">
            <div className="flex  items-baseline gap-4 w-auto">
                <h2 className="text-xl font-semibold text-center mb-6 text-[rgb(255,255,255)]">Price</h2>
                <input
                        
                        type="text"
                        
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border border-gray-400 text-white rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="flex items-start gap-4 w-[50%] justify-center">
                <h2 className="text-xl font-semibold text-center mb-6 text-[rgb(255,255,255)]">Status</h2>
                <div>
                        <label for="open" className="text-white pr-1"> Open</label>
                    <input                        
                            type="radio"
                            name="status"
                            id="open"
                            value="true"
                            checked={open === true}
                            onChange={(e) => isOpen(e.target.value === "true")}                
                    />
                    <label for="close" className="text-white pr-1"> Close</label>
                    <input                        
                            type="radio"                        
                            id="close"
                            name="status"
                            value="false"
                             onChange={(e) => isOpen(e.target.value === "true")}       
                    />
                </div>
                
            </div>
        </div>
          
                       
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-2 disabled:cursor-not-allowed"
                            disabled={disable}

                        >
                            Submit
                        </button>
        
          
       
       
      </div>
    </div>
  );
}
