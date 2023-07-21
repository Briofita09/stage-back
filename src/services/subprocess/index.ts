import { NotFoundProcess } from "../../errors";

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
