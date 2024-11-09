import express, {Request, Response} from "express";
import dotenv from "dotenv";
import httpStatus from "http-status";
import router from "./router"
import cors from "cors"
import compression from "compression"
import morgan from "morgan";
import SwaggerUi from "swagger-ui-express"
import Document from "../swagger.json"

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(process.env.NODE_EN || "dev"));
app.use(compression());

app.use("/api", router)
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(Document))

app.get("**", (req:Request, res:Response)=>{
  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: "Welcome to articles API"
  })
})
  
const port = process.env.PORT || 4000;

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})