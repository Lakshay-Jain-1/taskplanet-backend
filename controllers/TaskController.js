import { TaskModel } from "../models/TaskSchema.js"

const sendingAllTheTasks=async(req,res)=>{
  const data =   await TaskModel.find({})
  res.json(data)
}

const creatingATask=async(req,res)=>{
    const {Tasktitle,TaskLink,points,platform,earningsDescription} = req.body
    const data =  await TaskModel.create({Tasktitle,TaskLink,points,platform,earningsDescription})
    res.status(200).json({message:"Successfully created the task "})
  }

  const updateATask=async(req,res)=>{
    const data =   await TaskModel.findOneAndUpdate({})
    res.status(200).json({message:"Successfully updated the task "})
  }
  
  const deleteATask=async(req,res)=>{
    const data =   await TaskModel.findOneAndDelete({})
    res.status(200).json({message:"Successfully deleted the task "})
  }
  

export {sendingAllTheTasks,creatingATask,updateATask,deleteATask}