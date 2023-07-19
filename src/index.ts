import "dotenv/config";
import express from "express";
import cors from "cors";
import "express-async-errors";
import { areaRouter } from "./routes/area";
import handleError from "./middlewares/errorHandler";
const app = express();

app.use(cors()).use(express.json()).use("/area", areaRouter).use(handleError);

export { app };
