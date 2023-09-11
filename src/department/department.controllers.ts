import { Request, Response } from "express";
import { createDepartmentService } from "./department.service";

export const createDepartmentController = async (request: Request, response: Response) => {
  return await createDepartmentService(request, response);
};
