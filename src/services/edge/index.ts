import * as edgeRepositorie from "../../repositories/edge";

export async function newEdges(processId: string, edges: any) {
  return await edgeRepositorie.newEdges(processId, edges);
}

export async function deleteEdges(processId: string) {
  return await edgeRepositorie.deleteEdges(processId);
}

export async function getEdges(processId: string) {
  return await edgeRepositorie.getEdges(processId);
}
