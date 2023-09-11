import { Router } from "express";

import { createDepartmentController } from "./department.controllers";

const departmentRouter = Router();

departmentRouter.post("/", createDepartmentController);

export default departmentRouter;
