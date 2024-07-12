import mongoose from "mongoose"

export const connectToDB = async()=>{

    const connection = {}
    try {
        if(connection.isConnected){
            console.log("if bağlantı başarılı.")
            return;
        }
     const db=  await mongoose.connect(process.env.MONGODB_URI)
     connection.isConnected = db.connections[0].readyState
     console.log("bağlantı başarılı.")
    } catch (error) {
        console.log("error",error)
    }
}