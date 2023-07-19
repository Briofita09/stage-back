import { prisma } from "../../database";
import { Area } from "../../interfaces";

export async function newArea(area: Area) {
  return await prisma.area.create({
    data: {
      name: area.name,
    },
  });
}

export async function getAllAreas(): Promise<Area[]> {
  return await prisma.area.findMany();
}

export async function getAreaById(id: string) {
  return await prisma.area.findFirst({
    where: {
      id: Number(id),
    },
  });
}

export async function getAreaByName(name: string) {
  return await prisma.area.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
  });
}

export async function updateArea(area: Area, id: string) {
  return await prisma.area.update({
    where: {
      id: Number(id),
    },
    data: {
      name: area.name,
    },
  });
}

export async function deleteArea(id: string) {
  return await prisma.area.delete({
    where: {
      id: Number(id),
    },
  });
}
