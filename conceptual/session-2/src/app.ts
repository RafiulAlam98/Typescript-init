import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import { dbConnect } from "./app/utils/dbConnect";

const app: Application = express();

//using cors
app.use(cors());

//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//render ejs
app.set("view engine", "ejs");

dbConnect();

//we will import all routes here
import productRoute from "./app/modules/product/product.router";

//here all default routes
app.get("/", (req, res) => {
  res.render("index");
});

//custom routes path
app.use("/api/v1/products", productRoute);
//express app export
export { app };
