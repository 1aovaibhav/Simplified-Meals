import express from 'express'
import cors from 'cors';
import http from "http";
import cookieParser from 'cookie-parser';
import { Server } from "socket.io";
const app = express();


const server = http.createServer(app);
app.use(cors({
  origin: "http://localhost:5173, https://simplifiedmeals.netlify.app/", // frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


app.use(express.json({ limit: "16kb"})); //to get json data
 
app.use(express.urlencoded({extended:true, limit:"16kb"})); //to get data from url and decide it

app.use(express.static("public")) //to keep public data like images etc

app.use(cookieParser()) //to perfrom CRUD on cookies on client browser

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173, https://simplifiedmeals.netlify.app/", // your frontend URL
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter);

import messRouter from './routes/mess.routes.js'
app.use("/api/v1/mess", messRouter);

import orderRouter from './routes/order.routes.js'
app.use("/api/v1/order", orderRouter)

export {app, server,io};