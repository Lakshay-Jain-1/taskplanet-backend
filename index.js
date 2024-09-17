import express from "express"
import TaskRoute from "./routes/TaskRoute.js"
import Connection from "./db/database.js"
import { configDotenv } from "dotenv"
import cors from "cors"
configDotenv()
const app = express()

let corsOptions = {
    origin: ['http://localhost:1573'],
    optionsSuccessStatus: 200 
  }
   

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/tasks", TaskRoute)


const portNumber = process.env.PORT_NUMBER||5000

app.listen(portNumber,async()=>{
   await Connection()
    console.log("Server is working ")
})