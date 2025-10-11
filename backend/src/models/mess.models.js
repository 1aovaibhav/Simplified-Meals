import mongoose from "mongoose";
const { Schema } = mongoose;

const menuSchema = new Schema({
  breakfast: {
    type: [[String]], 
    default: []
  },
  lunch: {
    type: [[String]], 
    default: []
  },
  dinner: {
    type: [[String]], 
    default: []
  }
}, { _id: false });

const messSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String },
    address: { type: String },
    location: {
      region: String,
      coordinates: { type: [Number], index: "2dsphere" }
    },

    menu: { type: menuSchema, default: {} },

    isOpen: { type: Boolean, default: true },
    otp: { type: String },
    otpExpires: { type: Date },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Mess=  mongoose.model("Mess", messSchema);
