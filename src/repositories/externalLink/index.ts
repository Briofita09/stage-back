import { prisma } from "../../database";

export async function createExternalLink(processId: string, link: any) {
  return await prisma.externalLink.create({
    data: {
      link: link.link,
      processId,
    },
  });
}

export async function getAllExternalLinkFromProcess(processId: string) {
  return await prisma.externalLink.findMany({
    where: { processId },
  });
}

export async function getOneExternalLink(id: string) {
  return await prisma.externalLink.findFirst({
    where: { id: Number(id) },
  });
}

export async function updateExternalLink(id: string, link: any) {
  return await prisma.externalLink.update({
    where: { id: Number(id) },
    data: {
      link: link.link,
    },
  });
}

export async function deleteExternalLink(id: string) {
  return await prisma.externalLink.delete({
    where: { id: Number(id) },
  });
}
