import { Request, Response } from "express";

import * as edgeService from "../../services/edge";

export async function newEdges(req: Request, res: Response) {
  const processId = req.params.processId;
  const edges = req.body;
  await edgeService.newEdges(processId, edges);
  return res.status(201).send();
}

export async function deleteEdges(req: Request, res: Response) {
  const processId = req.params.processId;
  await edgeService.deleteEdges(processId);
  return res.status(204).send();
}

export async function getEdges(req: Request, res: Response) {
  const processId = req.params.processId;
  const edges = await edgeService.getEdges(processId);
  console.log(edges);
  return res.status(200).json(edges);
}
