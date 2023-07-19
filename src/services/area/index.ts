import * as areaRepositorie from "../../repositories/area";
import { Area } from "../../interfaces";
import { AreaAlreadyExists, NotFoundArea } from "../../errors";

export async function newArea(area: Area) {
  const existArea = await areaRepositorie.getAreaByName(area.name);
  if (existArea) throw AreaAlreadyExists();
  return await areaRepositorie.newArea(area);
}

export async function getAllAreas() {
  return await areaRepositorie.getAllAreas();
}

export async function getArea(id: string) {
  const foundArea = await areaRepositorie.getAreaById(id);
  if (!foundArea) throw NotFoundArea();
  return foundArea;
}

export async function updateArea(area: Area, areaId: string) {
  const foundArea = await areaRepositorie.getAreaById(areaId);
  if (!foundArea) throw NotFoundArea();
  const existArea = await areaRepositorie.getAreaByName(area.name);
  if (existArea) throw AreaAlreadyExists();
  return await areaRepositorie.updateArea(area, areaId);
}

export async function deleteArea(id: string) {
  const foundArea = await areaRepositorie.getAreaById(id);
  if (!foundArea) throw NotFoundArea();
  return await areaRepositorie.deleteArea(id);
}
