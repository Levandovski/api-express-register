import { Router } from "express";

import {
  createEmployeeController,
  findAllEmployeeController,
  findEmployeeController,
  updateEmployeeController,
} from "./employee.controllers";

const employeeRouter = Router();

employeeRouter.post("/", createEmployeeController);
employeeRouter.get("/all", findAllEmployeeController);
employeeRouter.get("/:id", findEmployeeController);
employeeRouter.put("/update", updateEmployeeController);

export default employeeRouter;
