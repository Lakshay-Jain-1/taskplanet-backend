import express from "express"


const TaskRoute = express.Router()

TaskRoute.get("/",(req,res)=>{
    res.send("hello")
})


export default TaskRoute