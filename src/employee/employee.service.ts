import { Request, Response } from "express";
import { Department } from "../entities/Department";
import { Employee } from "../entities/Employee";
import AppError from "../middlewares/AppError";

export const createEmployeeService = async (request: Request) => {
  const { titleDepartment, titleEmployee, descriptionEmployee } = request.body;

  const department: any = await Department.findOneBy({
    title: titleDepartment,
  });

  if (department === null) throw new AppError("Department not exists", 404);

  const employee: any = await Employee.findOneBy({ title: titleEmployee });

  if (employee !== null) throw new AppError("Employee already exists");

  const employ = new Employee();

  employ.title = titleEmployee;
  employ.description = descriptionEmployee;
  employ.department = department;

  await employ.save();
  return employ;
};

export const findAllEmployeeService = async () => {
  const employee: any = await Employee.find({
    relations: {
      department: true,
    },
  });

  if (employee === null || employee.length === 0)
    throw new AppError("Employee not found!", 404);

  return employee;
};

export const findEmployeeService = async (request: Request) => {
  const { id } = request.params;

  const employee: any = await Employee.find({
    where: {
      id: parseInt(id),
    },
    relations: {
      department: true,
    },
  });

  if (employee === null || employee.length === 0)
    throw new AppError("Employee not found!", 404);

  return employee;
};

export const updateEmployeeService = async (request: Request) => {
  const { id, titleEmployee, descriptionEmployee, departmentTitle } =
    request.body;

  const employee = await Employee.findOneBy({ id: id });

  if (!employee) throw new AppError("Employee not found!", 404);

  const department = await Department.findOneBy({
    title: departmentTitle,
  });

  if (!department) throw new AppError("Deparment not found!", 404);

  employee.id = id;
  employee.title = titleEmployee;
  employee.description = descriptionEmployee;
  employee.department = department;
  await employee.save();

  return employee;
};
