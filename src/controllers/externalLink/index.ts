import { Request, Response } from "express";
import * as externalLinkService from "../../services/externalLink";

export async function createExternalLink(req: Request, res: Response) {
  const link = req.body;
  const processId = req.params.processId;
  await externalLinkService.createExternalLink(processId, link);
  return res.send();
}

export async function getAllExternalLinkFromProcess(
  req: Request,
  res: Response
) {
  const processId = req.params.processId;
  const links = await externalLinkService.getAllExternalLinkFromProcess(
    processId
  );
  return res.status(200).json(links);
}

export async function updateExternalLink(req: Request, res: Response) {
  const link = req.body;
  const linkId = req.params.id;
  await externalLinkService.updateExternalLink(linkId, link);
  return res.send();
}

export async function deleteExternalLink(req: Request, res: Response) {
  const linkId = req.params.id;
  await externalLinkService.deleteExternalLink(linkId);
  return res.status(204).send();
}
