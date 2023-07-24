import { prisma } from "../../database";

export async function newSubProcesses(processId: string, newSubProcesses: any) {
  console.log(newSubProcesses);
  const subPrcesses = newSubProcesses.subprocess.map((sub: any) => {
    return {
      ...sub,
      mainProcessId: processId,
    };
  });
  return await prisma.process.createMany({
    data: subPrcesses,
  });
}

export async function getAllSubProcessFromProcess(processId: string) {
  return await prisma.process.findMany({
    where: {
      mainProcessId: processId,
    },
  });
}

export async function updateSubProcesses(updatedSubProcess: any) {
  const update = updatedSubProcess.subProcess.map(async (sub: any) => {
    return await prisma.process.update({
      where: {
        id: sub.id,
      },
      data: {
        name: sub.name,
        order: sub.order,
      },
    });
  });
  return Promise.all(update);
}

export async function deleteSubProcesses(processId: string) {
  return await prisma.process.deleteMany({
    where: {
      mainProcessId: processId,
    },
  });
}
