//imports
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fRouter from "./../../2.Service/Routes/1.index.js";

//construct instance of express
const app = express();

//environment variables
dotenv.config();

//config app app

app.use(
  cors({
    origin: process.env.CORS_URL_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
fRouter(app);
export default app;
