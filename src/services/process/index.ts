import * as processRepositorie from "../../repositories/process";
import * as areaRepositorie from "../../repositories/area";
import { Process } from "../../interfaces";
import { NotFoundArea, NotFoundProcess } from "../../errors";

export async function newProcess(areaId: string, process: Process) {
  return await processRepositorie.newProcess(areaId, process);
}

export async function getAllAreaProcess(areaId: string) {
  const existArea = areaRepositorie.getAreaById(areaId);
  if (!existArea) throw NotFoundArea();
  return await processRepositorie.getAllAreaProcess(areaId);
}

export async function getOneProcess(processId: string) {
  const foundProcess = await processRepositorie.getProcess(processId);
  console.log(foundProcess);
  if (!foundProcess) throw NotFoundProcess();
  return foundProcess;
}

export async function updateProcess(processId: string, process: Process) {
  const existProcess = await processRepositorie.getProcess(processId);
  if (!existProcess) throw NotFoundProcess();
  return await processRepositorie.updateProcess(processId, process);
}

export async function deleteProcess(processId: string) {
  const existProcess = await processRepositorie.getProcess(processId);
  if (!existProcess) throw NotFoundProcess();
  return await processRepositorie.deleteProcess(processId);
}
