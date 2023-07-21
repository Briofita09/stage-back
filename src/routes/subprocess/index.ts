import { Router } from "express";

import * as subProcessController from "../../controllers/subprocess";

const subProcessRouter = Router();

subProcessRouter.post("/:processId", subProcessController.newSubProcesses);

subProcessRouter.get(
  "/:processId",
  subProcessController.getSubProcessFromProcess
);

subProcessRouter.put("/:subProcessId", subProcessController.updateSubProcess);
export { subProcessRouter };
