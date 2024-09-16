import mongoose from "mongoose";

async function Connection() {
    try {
      await  mongoose.connect()
      console.log("Database is connected")
    }catch(err){
        console.log("DataBase is not working ", err)
    }
 
}


export default Connection