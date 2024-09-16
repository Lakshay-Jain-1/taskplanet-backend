import mongoose from "mongoose";


const TaskSchema = mongoose.Schema({
    Tasktitle:String,
    TaskLink:String,
    points:Number,
    platform:String,
    earningsDescription:String
            

})


export const TaskModel = mongoose.model("TaskModel",TaskSchema)