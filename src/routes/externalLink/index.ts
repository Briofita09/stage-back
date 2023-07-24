import { Router } from "express";
import * as externalLinkController from "../../controllers/externalLink";

const externalLinkRouter = Router();

externalLinkRouter.post(
  "/:processId",
  externalLinkController.createExternalLink
);

externalLinkRouter.get(
  "/:processId",
  externalLinkController.getAllExternalLinkFromProcess
);

externalLinkRouter.put("/:id", externalLinkController.updateExternalLink);

externalLinkRouter.delete("/:id", externalLinkController.deleteExternalLink);
export { externalLinkRouter };
