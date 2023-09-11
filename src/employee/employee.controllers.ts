import { Request, Response } from "express";
import { statusCode } from "../utilts/statusCode";
import {
  createEmployeeService,
  findAllEmployeeService,
  findEmployeeService,
  updateEmployeeService,
} from "./employee.service";

export const createEmployeeController = async (
  request: Request,
  response: Response
) => {
  const createEmployee = await createEmployeeService(request);
  return response.status(statusCode.created).json(createEmployee);
};

export const findAllEmployeeController = async (
  request: Request,
  response: Response
) => {
  const findAllEmployee = await findAllEmployeeService();
  return response.status(statusCode.ok).json(findAllEmployee);
};

export const findEmployeeController = async (
  request: Request, 
  response: Response 
) => {
  const findEmployee = await findEmployeeService(request);
  return response.status(statusCode.ok).json(findEmployee)
};

export const updateEmployeeController = async (
  request: Request,
  response: Response
) => {
  const update = await updateEmployeeService(request);  

  return response.status(statusCode.ok).json(update);
};
