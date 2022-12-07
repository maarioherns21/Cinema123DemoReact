import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.js";
import userRoutes from "./routes/users.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/user", userRoutes)
app.use("/movies", indexRoutes);

const SERVER = process.env.CONNECTION_URL;

mongoose
  .connect(SERVER, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to db"))
  .catch((error) => consosle.log(error.message));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
