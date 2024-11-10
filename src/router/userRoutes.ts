import { isUserExist, verifyUser } from "../middleware/validation";
import userController from "../modules/user/controller/userController"
import { Router } from "express"

const router = Router();

router.post("/register", isUserExist, userController.registerUser );
router.post("/login", verifyUser, userController.loginUser)

export default router