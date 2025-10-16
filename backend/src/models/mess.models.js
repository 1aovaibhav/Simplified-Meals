import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
//
// Subschema for one meal (breakfast / lunch / dinner)
//
const mealSchema = new Schema({
  items: [{ type: String, trim: true }],   // e.g. ["Poha", "Chai"]
  price: { type: Number, default: 60 },
  isOpen: { type: Boolean, default: true },
}, { _id: false });

//
// Subschema for weekly menu (7 days × 3 meals)
//
const weeklyMenuSchema = new Schema({
  monday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
  tuesday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
  wednesday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
  thursday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
  friday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
  saturday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
  sunday: {
    breakfast: { type: mealSchema, default: () => ({}) },
    lunch:     { type: mealSchema, default: () => ({}) },
    dinner:    { type: mealSchema, default: () => ({}) },
  },
}, { _id: false });

//
// Main Mess schema
//
const messSchema = new Schema({
  name:       { type: String, required: true, trim: true },
  email:      { type: String, required: true, unique: true, lowercase: true },
  phone:      { type: String, required: true },
  address:    { type: String, required: true },


  menu: { type: weeklyMenuSchema, default: {} },

  otp:         { type: String },
  otpExpires:  { type: Date },
  isVerified:  { type: Boolean, default: false },

  // future-ready tokens (for mess admin login)
  refreshToken: { type: String },
}, { timestamps: true });


messSchema.methods.generateAccessToken = function(){
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
  messSchema.methods.generateRefreshToken = function(){
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

export const Mess = mongoose.model("Mess", messSchema);
