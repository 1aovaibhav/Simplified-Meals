import { Router } from "express";
import { registerSendOtp, loginSendOtp, verifyOtp } from '../controllers/user.controllers.js ';

const router = Router()

router.route("/registerUser").post(registerSendOtp);
router.route("/loginUser").post(loginSendOtp);
router.route("/verifyUser").post(verifyOtp);

export default router