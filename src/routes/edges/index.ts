import { Router } from "express";
import * as edgeController from "../../controllers/edge";

const edgeRouter = Router();

edgeRouter.post("/:processId", edgeController.newEdges);
edgeRouter.delete("/:processId", edgeController.deleteEdges);
edgeRouter.get("/:processId", edgeController.getEdges);
export { edgeRouter };
