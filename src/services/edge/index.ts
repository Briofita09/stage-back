import * as edgeRepositorie from "../../repositories/edge";

export async function newEdges(processId: string, edges: any) {
  return await edgeRepositorie.newEdges(processId, edges);
}
