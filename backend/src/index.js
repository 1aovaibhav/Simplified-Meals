import dotenv from 'dotenv';
dotenv.config({path:'./.env'})

import connectDB from "./db/index.js";
import {app} from './app.js';

connectDB().then(()=>{
    app.listen(process.env.PORT || 5000 , ()=> {
        console.log("app is running on PORT: ", process.env.PORT || 5000);
    })
}).catch((err)=>{
    console.log(err);
})