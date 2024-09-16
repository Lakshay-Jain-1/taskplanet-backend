
import express from "express"
import TaskRoute from "./routes/TaskRoute.js"
import Connection from "./db/database.js"
import { configDotenv } from "dotenv"

configDotenv()
const app = express()

app.use("/api/tasks", TaskRoute)


const portNumber = process.env.PORT_NUMBER||5000

app.listen(portNumber,async()=>{
   await Connection()
    console.log("Server is working ")
})