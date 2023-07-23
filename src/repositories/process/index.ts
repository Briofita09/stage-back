import { prisma } from "../../database";
import { Process } from "../../interfaces";

export async function newProcess(areaId: string, process: Process) {
  return await prisma.process.create({
    data: {
      name: process.name,
      areaId: Number(areaId),
    },
  });
}

export async function getAllAreaProcess(areaId: string) {
  return await prisma.process.findMany({
    where: {
      areaId: Number(areaId),
    },
  });
}

export async function getProcess(processId: string) {
  return await prisma.process.findFirst({
    where: {
      id: processId,
    },
  });
}

export async function updateProcess(processId: string, process: Process) {
  return await prisma.process.update({
    where: {
      id: processId,
    },
    data: {
      name: process.name,
    },
  });
}

export async function deleteProcess(processId: string) {
  return await prisma.process.delete({
    where: {
      id: processId,
    },
  });
}
