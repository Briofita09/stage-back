import { Request, Response } from "express";

import * as subProcessesService from "../../services/subprocess";

export async function newSubProcesses(req: Request, res: Response) {
  const processId = req.params.processId;
  const subProcesses = req.body;
  await subProcessesService.newSubProcesses(processId, subProcesses);
  return res.status(201).json({ message: "Sub processos criados com sucesso" });
}

export async function getSubProcessFromProcess(req: Request, res: Response) {
  const processId = req.params.processId;
  const subProcesses = await subProcessesService.getProcessesFromProcess(
    processId
  );
  return res.status(200).json(subProcesses);
}

export async function updateSubProcess(req: Request, res: Response) {
  const updatedSubProcess = req.body;
  await subProcessesService.updateSubProcess(updatedSubProcess);
  return res
    .status(200)
    .json({ message: "Subprocesso atualizado com sucesso" });
}

export async function deleteSubProcesses(req: Request, res: Response) {
  const processId = req.params.processId;
  await subProcessesService.deleteSubProcesses(processId);
  return res.status(204).send();
}
