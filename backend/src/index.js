import dotenv from 'dotenv';
import { server } from './app.js';
dotenv.config({path:'./.env'})

import connectDB from "./db/index.js";
import {app} from './app.js';

connectDB().then(()=>{
    server.listen(process.env.PORT ||5000, () => {console.log(`Server running on port,`,  process.env.PORT || 5000);})
    
}).catch((err)=>{
    console.log(err);
})