import { Router } from "express";
import userRouter from "./userRoutes"
import articleRoute from "./articleRoutes"

const router: Router = Router();

router.use("/user", userRouter)
router.use("/article", articleRoute)

export default router