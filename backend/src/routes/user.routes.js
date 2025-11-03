import { Router } from "express";
import { registerSendOtp, loginSendOtp, verifyOtp , sendContactMail, logoutUser} from '../controllers/user.controllers.js ';
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router()

router.route("/registerUser").post(registerSendOtp);
router.route("/loginUser").post(loginSendOtp);
router.route("/verifyUser").post(verifyOtp);
router.route("/sendMail").post(sendContactMail);
router.route("/logoutUser").post(logoutUser);

export default router