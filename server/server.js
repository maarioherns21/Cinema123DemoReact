import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import routeIndex from "./routes/index.js";
import usersIndex from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/movies", routeIndex);
app.use("/user", usersIndex);

app.get("/" , (req,res) => {
  res.send("hello")
})

const SERVER = process.env.CONNECTION_URL || 4000;

mongoose
  .connect(SERVER, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error.massage);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express is listening on Port ${PORT}`);
});
