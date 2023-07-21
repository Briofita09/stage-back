import { prisma } from "../../database";

export async function newSubProcesses(processId: string, newSubProcesses: any) {
  const subPrcesses = newSubProcesses.subprocess.map((sub: any) => {
    return {
      ...sub,
      mainProcessId: Number(processId),
    };
  });
  return await prisma.process.createMany({
    data: subPrcesses,
  });
}
