import { Request, Response } from "express";

import * as subProcessesService from "../../services/subprocess";

export async function newSubProcesses(req: Request, res: Response) {
  const processId = req.params.processId;
  const subProcesses = req.body;
  await subProcessesService.newSubProcesses(processId, subProcesses);
  return res.status(201).json({ message: "Sub processos criados com sucesso" });
}
