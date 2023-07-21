import Joi from "joi";
import { Area } from "../../interfaces";

export const newAreaSchema = Joi.object<Area>({
  name: Joi.string().required(),
});

export const newProcessSchema = Joi.object<Area>({
  name: Joi.string().required(),
});
