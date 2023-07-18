import "dotenv/config";
import express from "express";
import cors from "cors";
import "express-async-errors";
const app = express();

app.use(cors()).use(express.json());

export { app };
