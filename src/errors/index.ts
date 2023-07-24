import { CustomError } from "../interfaces";

export function InvalidSchema(message: string): CustomError {
  return {
    message: message,
    status: 422,
  };
}

export function AreaAlreadyExists(): CustomError {
  return {
    message: "Já existe uma área com este nome",
    status: 409,
  };
}

export function NotFoundArea(): CustomError {
  return {
    message: "Nenhuma área foi encontrada para este ID",
    status: 404,
  };
}

export function NotFoundProcess(): CustomError {
  return {
    message: "Nenhum processo foi encontrado para este ID",
    status: 404,
  };
}

export function CanNotDeleteProcess(): CustomError {
  return {
    message: "Não é permitido apagar um processo null",
    status: 401,
  };
}
