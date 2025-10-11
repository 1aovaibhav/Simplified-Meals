import mongoose from "mongoose";
const { Schema } = mongoose;

const orderItemSchema = new Schema({
  itemId: { type: Schema.Types.ObjectId }, // reference to Mess.menu item id (optional)
  name: { type: String, required: true }, // snapshot of item name
  price: { type: Number, required: true },// snapshot of item price
  qty: { type: Number, required: true, default: 1 }
}, { _id: false });

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    messId: { type: Schema.Types.ObjectId, ref: "Mess", required: true },

    items: [orderItemSchema], // items snapshot at time of order
    totalAmount: { type: Number, required: true },

    mealType: { type: String, enum: ["breakfast", "lunch", "dinner"], required: true },
    orderType: { type: String, enum: ["dinein", "takeaway", "delivery"], required: true },

    // user details captured at ordering time (useful for delivery & record)
    userDetails: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String } // optional for dinein/takeaway
    },

    status: {
      type: String,
      enum: ["placed", "accepted", "preparing", "ready", "picked_up", "delivered", "cancelled"],
      default: "placed"
    },

    
  },
  { timestamps: true }
);

export const Order =  mongoose.model("Order", orderSchema);
