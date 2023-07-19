import { Request, Response } from "express";
import * as areaService from "../../services/area";

export async function newArea(req: Request, res: Response) {
  const area = req.body;
  const newArea = await areaService.newArea(area);
  return res.status(201).json({ message: "Nova área criada", newArea });
}

export async function getArea(req: Request, res: Response) {
  const areaId = req.params.id;
  const foundArea = await areaService.getArea(areaId);
  return res.status(200).json(foundArea);
}

export async function getAllAreas(_req: Request, res: Response) {
  const allAreas = await areaService.getAllAreas();
  return res.status(200).json(allAreas);
}

export async function editArea(req: Request, res: Response) {
  const editedArea = req.body;
  const areaId = req.params.id;
  const updatedArea = await areaService.updateArea(editedArea, areaId);
  return res
    .status(200)
    .json({ message: "Nome da área modificada com sucesso", updatedArea });
}

export async function deleteArea(req: Request, res: Response) {
  const areaId = req.params.id;
  await areaService.deleteArea(areaId);
  return res.status(204).send();
}
