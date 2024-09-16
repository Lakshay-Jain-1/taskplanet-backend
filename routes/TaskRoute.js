import express from "express"
import { creatingATask, sendingAllTheTasks } from "../controllers/TaskController.js"


const TaskRoute = express.Router()

TaskRoute.get("/",sendingAllTheTasks)
TaskRoute.post("/create",creatingATask)


export default TaskRoute