import { TaskModel } from "../models/TaskSchema"

const sendingAllTheTasks=async(req,res)=>{
  const data =   await TaskModel.find({})
  res.json(data)
}

const creatingATask=async(req,res)=>{
    const {Tasktitle,TaskLink,points,platform,earningsDescription} = req.body
    const data =  await TaskModel.create({Tasktitle,TaskLink,points,platform,earningsDescription})
    res.status(200).json({message:"Successfully created the task "})
  }




export {sendingAllTheTasks,creatingATask}