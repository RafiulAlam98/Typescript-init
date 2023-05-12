import cors from "cors";
import express, { Application } from "express";
const app:Application = express()

//application route
import userRoutes from './app/modules/user/user.route';

app.use(cors())


//parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/api/v1/user', userRoutes)

export default app

