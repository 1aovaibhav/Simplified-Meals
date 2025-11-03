import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";
import { generateOtp, sendOtpEmail } from "../utils/sendOtp.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { contactMail } from "../utils/contactMail.js";

const OTP_EXPIRY_MINUTES = 5;

const generateAccessAndRefreshToken = async(userId) => {
    try{
        const user = await User.findById(userId);

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
    
        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave: false})

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

     const existedUser  = await User.findOne({email});

        if(existedUser) {
            throw new ApiError(409, "User with email already exists")
        }
        
//   const otp = generateOtp();
//   const otpExp = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
//   await sendOtpEmail(email, otp);


  let user = new User({ name, email, phone, address });
//   user.otp = otp;
//   user.otpExpires = otpExp
  await user.save();

  res.json({ message: "User is registered successfully" });
});


export const loginSendOtp = async (req, res) => {
  const { email} = req.body;

  if (!email) return res.status(400).json({ message: "Email required" });

  let user = await User.findOne({ email });

   if(!user) {
            throw new ApiError(409, "User does not exist for this email ID")
    }
  const otp = generateOtp();
  user.otp = otp;
  user.otpExpires = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
  await user.save();

  await sendOtpEmail(email, otp);
 const createdUser = await User.findById(user._id);
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

  const user = await User.findOne({ email });
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
     const loggedInUser = await User.findById(user._id)
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

export const sendContactMail = async(req, res) => {
  const {name, email, subject, message} = req.body;
  if(!email || !name || !subject || !message) return res.status(400).json({message:"All four fields are compulsary to send mail"});

  await contactMail(name, email, subject, message);
  return res.status(200).json({message:"Mail sent successfully"});
}

export const logoutUser = asyncHandler(async( req, res ) => {
    await User.findByIdAndUpdate(
        req.user_id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
  .clearCookie("accessToken", options)
  .clearCookie("refreshToken", options)
  .status(200)
  .json(
    new ApiResponse(200, {}, "user logged out successfully")
  );
})