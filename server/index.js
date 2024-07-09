import express from "express"

import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js"

dotenv.config();//allows you to access env file variables

const PORT=8000;
const app=express();

app.use('/',router);

app.listen(PORT,()=>{
    console.log(`Server is running successfully on port ${PORT}`)
})
const USERNAME=process.env.DB_USER;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);