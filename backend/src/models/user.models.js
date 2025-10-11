  import mongoose, { Schema } from "mongoose";
  import jwt from "jsonwebtoken";
  const userSchema = new Schema(

    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, unique: true, lowercase: true, index: true },
      phone: { type: String, required: true },
      address: { type: String , required: true},             
      otp: { type: String },               
      otpExpires: { type: Date },          
      isVerified: { type: Boolean, default: false },
      refreshToken: { type: String } 
    },
    { timestamps: true }

  );

  userSchema.methods.generateAccessToken = function(){
      return jwt.sign(
          {
              _id: this._id,
              email: this.email,
              name: this.name,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
              expiresIn: process.env.ACCESS_TOKEN_EXPIRY
          }
      )
  }
  userSchema.methods.generateRefreshToken = function(){
      return jwt.sign(
          {
              _id: this._id,
              
          },
          process.env.REFRESH_TOKEN_SECRET,
          {
              expiresIn: process.env.REFRESH_TOKEN_EXPIRY
          }
      )
  }

  export const User  = mongoose.model("User", userSchema);