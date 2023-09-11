import { DataSource } from "typeorm";
import { Department } from "./entities/Department";
import { Employee } from "./entities/Employee";

const DB_TYPE: string | any = process.env.DB_TYPE;
const DB_HOST: string | any = process.env.DB_HOST;
const DB_USERNAME: string | any = process.env.DB_USERNAME;
const DB_PASSWORD: string | any = process.env.DB_PASSWORD;
const DB_POST: string | any = process.env.DB_POST;
const DB_DATABASE: string | any = process.env.DB_DATABASE;
const DB_SYNCHRONIZE: boolean | any = process.env.DB_SYNCHRONIZE;

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_POST,
  database: DB_DATABASE,
  synchronize: DB_SYNCHRONIZE === "true" ? true : false,
  entities: [Department, Employee],
});
