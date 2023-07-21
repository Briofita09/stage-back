import "dotenv/config";
import express from "express";
import cors from "cors";
import "express-async-errors";
import { areaRouter } from "./routes/area";
import handleError from "./middlewares/errorHandler";
import { processRouter } from "./routes/process";
const app = express();

app
  .use(cors())
  .use(express.json())
  .use("/area", areaRouter)
  .use("/process", processRouter)
  .use(handleError);

export { app };
