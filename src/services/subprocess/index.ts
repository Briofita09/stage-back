import { CanNotDeleteProcess, NotFoundProcess } from "../../errors";

import * as processRepositorie from "../../repositories/process";
import * as subProcessRepositorie from "../../repositories/subProcess";

export async function newSubProcesses(
  processId: string,
  newSubProcesses: Array<any>
) {
  const foundProcess = await processRepositorie.getProcess(processId);
  if (!foundProcess) throw NotFoundProcess();
  return await subProcessRepositorie.newSubProcesses(
    processId,
    newSubProcesses
  );
}

export async function getProcessesFromProcess(processId: string) {
  const foundProcess = await processRepositorie.getProcess(processId);
  if (!foundProcess) throw NotFoundProcess();
  return await subProcessRepositorie.getAllSubProcessFromProcess(processId);
}

export async function updateSubProcess(subProcess: Array<any>) {
  return await subProcessRepositorie.updateSubProcesses(subProcess);
}

export async function deleteSubProcesses(processId: string) {
  if (processId == "null") throw CanNotDeleteProcess();
  return await subProcessRepositorie.deleteSubProcesses(processId);
}
