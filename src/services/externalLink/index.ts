import { NotFoundExternalLink, NotFoundProcess } from "../../errors";
import * as processRepositorie from "../../repositories/process";
import * as externalLinkRepositorie from "../../repositories/externalLink";

export async function createExternalLink(processId: string, link: any) {
  const foundProcess = await processRepositorie.getProcess(processId);
  if (!foundProcess) throw NotFoundProcess();
  return await externalLinkRepositorie.createExternalLink(processId, link);
}

export async function getAllExternalLinkFromProcess(processId: string) {
  const foundProcess = await processRepositorie.getProcess(processId);
  if (!foundProcess) throw NotFoundProcess();
  return await externalLinkRepositorie.getAllExternalLinkFromProcess(processId);
}

export async function updateExternalLink(id: string, link: any) {
  const foundLink = await externalLinkRepositorie.getOneExternalLink(id);
  if (!foundLink) throw NotFoundExternalLink();
  return await externalLinkRepositorie.updateExternalLink(id, link);
}

export async function deleteExternalLink(id: string) {
  const foundLink = await externalLinkRepositorie.getOneExternalLink(id);
  if (!foundLink) throw NotFoundExternalLink();
  return await externalLinkRepositorie.deleteExternalLink(id);
}
