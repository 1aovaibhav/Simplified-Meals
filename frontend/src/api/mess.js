import axios from "axios";

const BASE_URL = "https://simplified-meals.onrender.com/api/v1/mess";




export const sendOTP  = async (email) => {
   
    try{
        
        const res = await axios.post(`${BASE_URL}/loginMess`,{
        
            email : email,
          
        },
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        alert('OTP has been sent to the above EmailID');
    
        return res.data;
      }
    else if(res.status === 409){
        alert("Mess does not exist for this email ID");
    }else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Otp sending error:", err);
    alert(err.message?.response?.message || err.message || "Network error");
  }
};
export const verifyOTP  = async (email, otp) => {
   
    try{
        
        const res = await axios.post(`${BASE_URL}/verifyMess`,{
        
            email : email,
            otp:otp
          
        },
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        alert('User logged in successfully..');
    
        return res.data;
      }
    else if(res.status === 404){
        alert("User not found");
    } else if(res.status === 400){
        alert("Invalid or expired OTP");
    }
    else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Otp verification error:", err);
    alert(err.message?.response?.message || err.message || "Network error");
  }
};

export const updateMENU = async(items, price , isOpen, id, day, meal) => {
  try{
    const res = await axios.put(`${BASE_URL}/${id}/menu/${day}/${meal}`,{
      items:items,
      price:price,
      isOpen:isOpen
    },
   {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (res.status === 200) {
        alert(`Updated menu cell for ${day}'s ${meal} `);
    
        return res.data;
      }
    else if(res.status === 400){
        alert("Data input error");
    }
    else{
      alert("Unexpected response from server");
    }
  }
  catch(err){
    console.log(err);
  }
}

export const logoutUser = async(id) => {
    try{
        
        const res = await axios.post(`${BASE_URL}/logoutUser`,{
        
            user_id:id
          
        },
    {
        withCredentials: true, 
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        alert('User logged out successfully..');
    
        return res.data;
      }
    else if(res.status === 404){
        alert("User not found");
    } 
    else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Logout error:", err);
    alert(err.message?.response?.message || err.message || "Network error");
  }
}