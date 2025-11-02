import express from "express";
import { Router } from "express";
import { placeOrder, getOrdersForMess, completeOrder} from "../controllers/order.controllers.js";


const router = Router()
router.route("/place").post(placeOrder)
router.route("/:messId").get(getOrdersForMess)
router.route("/complete/:orderId").delete(completeOrder)

export default router;
