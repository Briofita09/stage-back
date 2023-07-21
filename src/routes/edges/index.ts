import { Router } from "express";
import * as edgeController from "../../controllers/edge";

const edgeRouter = Router();

edgeRouter.post("/:processId", edgeController.newEdges);

export { edgeRouter };
