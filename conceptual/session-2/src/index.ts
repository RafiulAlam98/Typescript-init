import cors from "cors";
import express, { Application } from 'express';
import mongoose from "mongoose";

const app:Application = express()

app.use(cors())
app.use(express.urlencoded({extended:false}))
const URI = "mongodb://127.0.0.1:27017/modular"
const port = process.env.PORT || 5000

const dbConnect = async():Promise<void>=>{
        if(!URI){
                throw new Error ("URI is not defined") 
        }
        await mongoose.connect(URI).then(()=>console.log("Database connceted"))
        const db = mongoose.connection
        const personCollection = db.collection("persons")

}

dbConnect()


app.get("/",(req,res)=>{
        res.send({
                message:"Our server is running",
                status:200

        })
})

app.listen(port, ()=>console.log(`Server is running on port ${port}`))