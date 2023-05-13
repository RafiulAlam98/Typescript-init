import mongoose from "mongoose";
import app from "./app";

const port = 5000

//database connection
async function bootstrap() {
        try {
                await mongoose.connect('mongodb://127.0.0.1:27017/practise-mongoose');
                console.log(`Database connected`)   
                app.listen(port, () => {
                        console.log(`Server is listening on port ${port}`)
                      })
        } catch (error) {
         console.log(error)       
        }
       
      }

      bootstrap()


