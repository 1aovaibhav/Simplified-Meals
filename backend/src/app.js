import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();



app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.use(express.json({ limit: "16kb"})); //to get json data
 
app.use(express.urlencoded({extended:true, limit:"16kb"})); //to get data from url and decide it

app.use(express.static("public")) //to keep public data like images etc

app.use(cookieParser()) //to perfrom CRUD on cookies on client browser


import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter);

import messRouter from './routes/mess.routes.js'
app.use("/api/v1/mess", messRouter);


export {app};