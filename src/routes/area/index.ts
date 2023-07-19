import { Router } from "express";

import * as areaController from "../../controllers/area";
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware";
import { newAreaSchema } from "../../schemas/area";

const areaRouter = Router();

areaRouter.post(
  "/",
  validateSchemaMiddleware(newAreaSchema),
  areaController.newArea
);
areaRouter.get("/", areaController.getAllAreas);
areaRouter.get("/:id", areaController.getArea);
areaRouter.put(
  "/:id",
  validateSchemaMiddleware(newAreaSchema),
  areaController.editArea
);
areaRouter.delete("/:id", areaController.deleteArea);
export { areaRouter };
