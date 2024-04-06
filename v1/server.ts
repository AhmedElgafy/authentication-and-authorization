import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import App from "./routes/index";
import mongoose, { ConnectOptions } from "mongoose";
import { PORT, URI } from "./config";

const server = express();

//Middlewares
server.use(cors());
server.use(cookieParser());
server.use(express.json());
server.use(express.urlencoded({ extended: false })); //so you can read req comes from form.

//Connect with Database.
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(
    URI as string,
    {
      //things that have to config and i don't know why === mongoose says both properties  have no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then(() => {
    console.log("Connected to database");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
server.use(App);
