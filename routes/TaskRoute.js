import express from "express"
import { creatingATask, sendingAllTheTasks,updateATask,deleteATask } from "../controllers/TaskController.js"


const TaskRoute = express.Router()

TaskRoute.get("/",sendingAllTheTasks)
TaskRoute.post("/create",creatingATask)
TaskRoute.put("/update",updateATask)
TaskRoute.delete("/delete",deleteATask)


export default TaskRoute