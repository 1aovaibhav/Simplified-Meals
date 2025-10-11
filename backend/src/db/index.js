import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("=====database connected=========");
    }
    catch(err){
        console.log("-----database connection error-----", err);
    }
}

export default connectDB;