import express from "express"
import TaskRoute from "./routes/TaskRoute.js"
import Connection from "./db/database.js"
import { configDotenv } from "dotenv"
import cors from "cors"
import AdminRoute from "./routes/AdminRoute.js"
configDotenv()
const app = express()

const corsOptions = {
  origin: ["http://localhost:5173", "https://full-stack-internship-task-3-w-front-end.vercel.app" ,"http://localhost:5174","https://taskplanet-frontend-seven.vercel.app"],
  optionsSuccessStatus: 200,
  credentials:true
};

app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/tasks", TaskRoute)
app.use("/admin",AdminRoute)


const portNumber = process.env.PORT_NUMBER||5000

app.listen(portNumber,async()=>{
   await Connection()
    console.log("Server is working ")
})
