import { prisma } from "../../database";

export async function newEdges(processId: string, edges: any) {
  const edge = edges.edges.map((el: any) => {
    return {
      ...el,
      processId: Number(processId),
    };
  });
  return await prisma.edge.createMany({
    data: edge,
  });
}

export async function deleteEdges(processId: string) {
  return await prisma.edge.deleteMany({
    where: {
      processId: Number(processId),
    },
  });
}

export async function getEdges(processId: string) {
  return await prisma.edge.findMany({
    where: {
      processId: Number(processId),
    },
  });
}
