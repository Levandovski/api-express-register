import { Request, Response } from "express";
import { Department } from "../entities/Department";

export const createDepartmentService = async (
  data: Request,
  response: Response
) => {
  const { title, description } = data.body;

  const department: any = await Department.findOneBy({ title: title });

  if (department !== null)
    return response.status(200).json({ message: "Department already exists" });

  const depart = new Department();
  depart.title = title;
  depart.description = description;

  try {
    await depart.save();
    return response.status(202).json({ message: "Department create success!" });
  } catch (error: any) {
    if (error instanceof Error)
      return response.status(500).json({ message: error.message });
  }
};
