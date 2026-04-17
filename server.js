import exp from 'express'
import { empapp } from './API/employeeapi.js'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import cors from "cors"
import { config } from 'dotenv';
config();
const app=exp()
app.set("trust proxy", 1);
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mini-app-frontend-livid.vercel.app",
    "https://mini-app-frontend-git-main-vullithraiambicas-projects.vercel.app"
  ],
  credentials: true
}));
app.use(exp.json())
app.use(cookieParser())

app.use("/employee-api",empapp)
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("db connected")
        const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on ${port}`));
    }
    catch (err){
        console.log("db connection failed", err)
    }
}
connectDb()