import { Router } from "express";
import { registerSendOtp, loginSendOtp, verifyOtp, getBreakfastMenu, getLunchMenu, getDinnerMenu, updateMenuCell} from '../controllers/mess.controllers.js';
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = Router()

router.route("/registerMess").post(registerSendOtp);
router.route("/loginMess").post(loginSendOtp);
router.route("/verifyMess").post(verifyOtp);

router.route("/:id/getBreakfast").get(getBreakfastMenu);
router.route("/:id/getLunch").get(getLunchMenu);
router.route("/:id/getDinner").get(getDinnerMenu);

router.put("/:id/menu/:day/:meal", updateMenuCell);

export default router