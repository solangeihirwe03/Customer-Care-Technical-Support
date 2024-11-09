import { Router } from "express";
import userRouter from "./"

const router: Router = Router();

router.use("/user", userRouter)

export default router