import { Request, Response } from "express";

import * as edgeService from "../../services/edge";

export async function newEdges(req: Request, res: Response) {
  const processId = req.params.processId;
  const edges = req.body;
  await edgeService.newEdges(processId, edges);
  return res.status(201).send();
}
