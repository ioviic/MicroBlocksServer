import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import auth from "./routes/auth";

const app = express();
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/microBlocks");

app.use("/api/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
  console.log("Running on localhost:8080 ");
});
