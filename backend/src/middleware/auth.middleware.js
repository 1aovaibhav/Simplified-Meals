import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js";
// we cam also write res as _ because it is not needed here
export const verifyJWT = asyncHandler( async (req, _ , next) => {
    try{
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if(!token || token === undefined) throw new ApiError(401, "unauthorized request")
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-refreshToken")
        if(!user) throw new ApiError(401, "Invalid access token")

        req.user = user;
        next()
    } catch(err){
        throw new ApiError(401, err?.message || "invalid access token")
    }
} )