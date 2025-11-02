import { Order } from "../models/order.models.js";
import {io} from "../app.js"
import { ChildProcess } from "child_process";

export const placeOrder = async (req, res) => {
  try {
    console.log("here 1")
    const order = await Order.create(req.body);
    console.log("here 2")
    // Emit real-time update to mess owner room
    io.emit("new-order", order);

    res.status(200).json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};

// controllers/order.controller.js

export const getOrdersForMess = async (req, res) => {
  const { messId } = req.params;
  try {
    const orders = await Order.find({ messId });
    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

export const completeOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) return res.status(404).json({ success: false, message: "Order not found" });

    // Emit real-time update to mess owner
    io.emit("order-completed", deletedOrder);

    res.status(200).json({ success: true, message: "Order completed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error completing order" });
  }
};
