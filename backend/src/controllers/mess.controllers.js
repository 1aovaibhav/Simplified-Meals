import { Mess } from "../models/mess.models.js";
import jwt from "jsonwebtoken";
import { generateOtp, sendOtpEmail } from "../utils/sendOtp.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const OTP_EXPIRY_MINUTES = 5;

const generateAccessAndRefreshToken = async(userId) => {
    try{
        const mess = await Mess.findById(userId);

        const accessToken = mess.generateAccessToken();
        const refreshToken = mess.generateRefreshToken();
    
        mess.refreshToken = refreshToken;
        await mess.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    }
    catch(err){
        throw new ApiError(500, "Something went wrong while generating access and refresh tokens");
        
    }
}

export const registerSendOtp = asyncHandler(async (req, res) => {
  
  const { email, name, phone, address } = req.body;

    if([email, name,phone, address].some((field)=> {
            field?.trim() === ""
        })){
            throw new ApiError(400, "All fields are required")
        }

     const existedUser  = await Mess.findOne({email});

        if(existedUser) {
            throw new ApiError(409, "User with email already exists")
        }
        
  const otp = generateOtp();
  const otpExp = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
  await sendOtpEmail(email, otp);


  let user = new Mess({ name, email, phone, address });
  user.otp = otp;
  user.otpExpires = otpExp
  await user.save();

  res.json({ message: "OTP sent to email" });
});


export const loginSendOtp = async (req, res) => {
  const { email} = req.body;

  if (!email) return res.status(400).json({ message: "Email required" });

  let user = await Mess.findOne({ email });

   if(!user) {
            throw new ApiError(409, "User does not exist for this email ID")
    }
  const otp = generateOtp();
  user.otp = otp;
  user.otpExpires = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
  await user.save();

  await sendOtpEmail(email, otp);
 const createdUser = await Mess.findById(user._id);
 if(!createdUser){
            throw new ApiError(500, "Something went wrong while registering the user");
        }
   return res.status(200).json(
            new ApiResponse(200, createdUser, "user generated successfully and OTP sent")
        )
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Email and OTP required" });

  const user = await Mess.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.otp !== otp || user.otpExpires < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }



   const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

     user.otp = null;
  user.otpExpires = null;
  user.isVerified = true;
  await user.save();

 

   const options = {
        httpOnly: true, //make cookies changeable by server only
        secure: true
    }
     const loggedInUser = await Mess.findById(user._id)
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged in Successfully"
        )
    ) 
};

export const getBreakfastMenu = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const mess = await Mess.findById(id);
  if (!mess) throw new ApiError(404, "Mess not found");

  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const breakfastMenu = weekDays.map(day => {
    const meal = mess.menu?.[day]?.breakfast;
    return meal?.items?.length ? meal.items : [];
  });
  const price = weekDays.map(day => {
    const p = mess.menu?.[day]?.breakfast?.price;
    return p || 40;
  });
  const openStatus = weekDays.map(day => {
    const s = mess.menu?.[day]?.breakfast?.isOpen;
    return s;
  });
 

  res.status(200).json({
    success: true,
    breakfast: breakfastMenu,
    price,
    openStatus
  });
});

export const getLunchMenu = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const mess = await Mess.findById(id);
  if (!mess) throw new ApiError(404, "Mess not found");

  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const lunchMenu = weekDays.map(day => {
    const meal = mess.menu?.[day]?.lunch;
    return meal?.items?.length ? meal.items : [];
  });
   const price = weekDays.map(day => {
    const p = mess.menu?.[day]?.lunch?.price;
    return p || 70;
  });
  const openStatus = weekDays.map(day => {
    const s = mess.menu?.[day]?.lunch?.isOpen;
    return s;
  });
 

 

  res.status(200).json({
    success: true,
    lunch: lunchMenu,
    price,
    openStatus
  });
});

export const getDinnerMenu = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const mess = await Mess.findById(id);
  if (!mess) throw new ApiError(404, "Mess not found");

  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  const dinnerMenu = weekDays.map(day => {
    const meal = mess.menu?.[day]?.dinner;
    return meal?.items?.length ? meal.items : [];
  });
   const price = weekDays.map(day => {
    const p = mess.menu?.[day]?.dinner?.price;
    return p || 70;
  });
  const openStatus = weekDays.map(day => {
    const s = mess.menu?.[day]?.dinner?.isOpen;
    return s;
  });


  res.status(200).json({
    success: true,
    dinner: dinnerMenu,
    price,
    openStatus
  });
});




export const updateMenuCell = asyncHandler(async (req, res) => {
  const { id, day, meal } = req.params;
  const { items, price, isOpen } = req.body;

  const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const meals = ["breakfast", "lunch", "dinner"];

  if (!weekDays.includes(day)) throw new ApiError(400, "Invalid day");
  if (!meals.includes(meal)) throw new ApiError(400, "Invalid meal");

  const mess = await Mess.findById(id);
  if (!mess) throw new ApiError(404, "Mess not found");

  // Update the specific meal
  if (items) mess.menu[day][meal].items = items;
  if (price !== undefined) mess.menu[day][meal].price = price;
  if (isOpen !== undefined) mess.menu[day][meal].isOpen = isOpen;

  await mess.save();

  res.status(200).json({
    success: true,
    message: `${meal} on ${day} updated successfully`,
    menu: mess.menu
  });
});


