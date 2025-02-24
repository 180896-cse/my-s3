import express, { Express } from "express";
import "dotenv/config";
import { MONGO_URI, PORT } from "./utils/secrets";
import mongoose from "mongoose";

const app: Express = express();

app.use(express.json());

// Handling Wildcard Resource request
app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Resource not found",
  });
});

mongoose.connect(MONGO_URI,()=>{
    console.log("connected to mongodb");
})

app.listen(PORT, () => {
  console.log(`Server is up over http://localhost:${PORT}`);
});
