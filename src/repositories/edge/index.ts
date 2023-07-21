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
