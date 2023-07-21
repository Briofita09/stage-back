import { Request, Response } from "express";
import * as processService from "../../services/process";

export async function newProcess(req: Request, res: Response) {
  const areaId = req.params.areaId;
  const process = req.body;
  const newProcess = await processService.newProcess(areaId, process);
  return res.status(201).json({ message: "Novo processo criado", newProcess });
}

export async function getAllAreaProcess(req: Request, res: Response) {
  const areaId = req.params.areaId;
  const allAreaProcess = await processService.getAllAreaProcess(areaId);
  return res.status(200).json(allAreaProcess);
}

export async function getOneProcess(req: Request, res: Response) {
  const processId = req.params.id;
  const foundProcess = await processService.getOneProcess(processId);
  return res.status(200).json(foundProcess);
}

export async function updateProcess(req: Request, res: Response) {
  const processId = req.params.id;
  const process = req.body;
  await processService.updateProcess(processId, process);
  return res.status(200).json({ message: "Processo alterado com sucesso" });
}

export async function deleteProcess(req: Request, res: Response) {
  const processId = req.params.id;
  await processService.deleteProcess(processId);
  return res.status(204).send();
}
