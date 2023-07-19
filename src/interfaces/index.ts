export interface Area {
  name: string;
}

export interface CustomError {
  message: string;
  status: number;
}

export interface ErrorHandler extends Error {
  status?: number;
}
