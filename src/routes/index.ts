import { Router } from "express";

import employeeRouter from "../employee/employee.routes";
import departmentRouter from "../department/department.routes";

const routes = Router();

routes.use('/employee', employeeRouter);
routes.use('/department', departmentRouter);

export default routes;