import express from "express";
import mongoose from "mongoose";
import { appRoutes } from "./routes/appRoutes.mjs";

// console.log(express);

const app = express();
const port = 4000;

//creating a server using express
app.listen(port, () => {
  console.log(`*** Server started at http://localhost:${port} ***`);
});

app.use(express.json()); //inbuilt express middleware to parse json format data
app.use(express.urlencoded()); //inbuilt express middleware to parse URLEncoded data

appRoutes(app);

//connecting to the MongoDb local database
mongoose
  .connect("mongodb://localhost:27017/shoppyglobe")
  .then(() => console.log("Connected to the MongoDb database successfully")) //logging success if connection is successful
  .catch((error) => console.log(`Something went Wrong. ERROR: ${error}`)); //logging error if connection is unsuccessful
