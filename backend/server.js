// import path from 'path'
import express from "express"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth_routes.js'
import messageRoutes from './routes/message_routes.js'
import userRoutes from './routes/user_routes.js'
import pdfRoutes from './routes/pdf_routes.js'
import lawRoutes from './routes/law_routes.js'
import formRoutes from './routes/form_routes.js'
// import userRoutes from './routes/user_routes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
// import { app, server } from "./socket/socket.js"
const app = express();

dotenv.config(); 
app.use(express.json())
app.use(cookieParser());
app.use(cors())
app.use("/files", express.static("files"));
const PORT = process.env.PORT || 5000

// const __dirname = path.resolve()


 //to parse request with json payload

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
app.use("/api/pdfs",pdfRoutes)
app.use('/api/lawyers',lawRoutes)
app.use('/api/forms',formRoutes)


// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
// })

// app.use("/api/auth",userRoutes)

// app.get("/",(req,res)=>{
//     //root route http://localhost:4000/
//     res.send("Hello World!!")
// })


app.listen(PORT,()=>{

    connectToMongoDB()
    console.log(`server running on port ${PORT}`)
})