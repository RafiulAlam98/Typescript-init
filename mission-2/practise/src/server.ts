import mongoose from "mongoose";
import app from "./app";


main().catch(err => console.log(err));


const port = 5000

async function main() {
  try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test-mongoose');
        console.log("database connected")
        app.listen(port, () => {
                console.log(`Server is listening on port ${port}`)
              })
  } catch (error) {
        console.log(error)
  }

}
