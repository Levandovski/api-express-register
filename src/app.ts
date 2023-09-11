import 'express-async-errors';
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { errors } from "celebrate";
import routes from "./routes";
import AppError from "./middlewares/AppError";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(morgan("dev"));

app.use(routes);

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {  
      console.log("AQUIII")
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: "error",
          messsage: error.message,
        });
      }
  
      return response.status(500).json({
        status: "error",
        message: "Internal server error",
      });     
    }
  );



export default app;
