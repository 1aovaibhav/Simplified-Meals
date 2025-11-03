import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/users";



export const register  = async (name, email, address, phone, navigate) => {
   
    try{
        
        const res = await axios.post(`${BASE_URL}/registerUser`,{
            name : name,
            email : email,
            phone : phone,
            address : address
        },
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        alert('Registered successfully!');
        navigate('/registered'); // 👈 redirect user
        return res.data;
      }
    else if(res.status === 409){
        alert("User with email already exists");
    }else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Registration error:", err);
    alert(err.response?.data?.message || err.message || "Network error");
  }
};
export const sendOTP  = async (email) => {
   
    try{
        
        const res = await axios.post(`${BASE_URL}/loginUser`,{
        
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
        alert("User does not exist for this email ID");
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
        
        const res = await axios.post(`${BASE_URL}/verifyUser`,{
        
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

export const sendMail = async(name, email, subject, message) => {
   try{
        
        const res = await axios.post(`${BASE_URL}/sendMail`,{
            name : name,
            email : email,
            subject : subject,
            message : message
        },
    {
        withCredentials: true, // 👈 Important if you're using cookies
        headers: {
          "Content-Type": "application/json",
        },
      })
    if (res.status === 200) {
        alert('Mail sent!');
        return;
       
      }
    else if(res.status === 400){
        alert("Please enter all 4 fields correctly");
    }else {
      alert("Unexpected response from server");
    }
  } catch (err) {
    console.error("Mail sneding error:", err);
    alert(err.response?.data?.message || err.message || "Network error");
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