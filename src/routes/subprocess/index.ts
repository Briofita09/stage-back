import { Router } from "express";

import * as subProcessController from "../../controllers/subprocess";

const subProcessRouter = Router();

subProcessRouter.post("/:processId", subProcessController.newSubProcesses);

export { subProcessRouter };
