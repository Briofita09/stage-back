import { Router } from "express";
import * as processController from "../../controllers/process";
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware";
import { newProcessSchema } from "../../schemas/area";

const processRouter = Router();

processRouter.post(
  "/:areaId",
  validateSchemaMiddleware(newProcessSchema),
  processController.newProcess
);

processRouter.get("/:areaId", processController.getAllAreaProcess);

processRouter.get("/getProcess/:id", processController.getOneProcess);

processRouter.put(
  "/:id",
  validateSchemaMiddleware(newProcessSchema),
  processController.updateProcess
);

processRouter.delete("/:id", processController.deleteProcess);

export { processRouter };
