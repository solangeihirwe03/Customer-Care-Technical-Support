import { Router } from "express";
import userRouter from "./userRoutes"
import articleRoute from "./articleRoutes"
import messageRoute from "./messageRoutes"

const router: Router = Router();

router.use("/user", userRouter)
router.use("/article", articleRoute)
router.use("/messages", messageRoute)

export default router